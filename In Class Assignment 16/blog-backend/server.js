const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB Connected')).catch((err) => console.error('MongoDB error', err));

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const Post = mongoose.model('Post', postSchema);

app.get('/posts', async(req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res) => {
    try{
        const {title, body} = req.body;
        const newPost = new Post({title, body});
        await newPost.save();
        res.json(newPost);
    } catch(err){
        res.status(500).json({message: 'Failed to save post!'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});