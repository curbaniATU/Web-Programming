import React, {useEffect, useState} from "react";
import axios from 'axios';

function App(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:''});
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({title:'', body:''});

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(res=> setPosts(res.data))
    .catch(err=> console.error("Error fetching posts:", err));
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleEditChange = (e) => {
    setEditForm({...editForm, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', form)
    .then(res => {
      setPosts([...posts, res.data]);
      setForm({title:'', body:''});
    })
    .catch(err=>console.error("Error submitting the post: ", err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`)
    .then(() => {
      setPosts(posts.filter(post => post._id !== id));
    })
    .catch(err => console.error("Error deleting the post: ", err));
  }

  const handleEditing = (id) => {
    setEditingId(id);
    const postToEdit = posts.find(post => post._id === id);
    setEditForm({title: postToEdit.title, body: postToEdit.body});
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/posts/${id}`, editForm)
    .then(res => {
      setPosts(posts.map(post => (post._id === id ? res.data : post)));
      setEditingId(null);
      setEditForm({title:'', body:''});
    })
    .catch(err => console.error("Error updating the post: ", err));
    
  };

  return (
    <div style={{padding: '20px', maxWidth: '600px', margin:'auto'}}>
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit} style={{marginBottom: '2rem'}}>
        <input name="title" placeholder="Post Title" value={form.title} onChange={handleChange} style={{width: '100%', padding:'10px', marginBottom: '10px'}}/>
        <textarea name="body" placeholder="Post Body" value={form.body} onChange={handleChange} style={{width: '100%', padding:'10px', height:'100px', marginBottom:'10px'}}/>
        <button type="submit" style={{padding: '10px 20px'}}>Submit Post</button>
      </form>

      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post._id} style={{border:'1px solid #ccc', padding:'10px', marginBottom:'15px'}}>
          {editingId === post._id ? (
            <form onSubmit={(e) => handleUpdate(e, post._id)} style={{marginBottom: '2rem'}}>
              <input name="title" placeholder="Post Title" value={editForm.title} onChange={handleEditChange} style={{width: '100%', padding:'10px', marginBottom: '10px'}}/>
              <textarea name="body" placeholder="Post Body" value={editForm.body} onChange={handleEditChange} style={{width: '100%', padding:'10px', height:'100px', marginBottom:'10px'}}/>
              <button type="submit" style={{padding: '10px 20px'}}>Update Post</button>
            </form>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div style={{ top: "10px", right: "10px" }}>
                <button onClick={() => handleEditing(post._id)} style={{ marginRight: "5px" }}>
                  Edit
                </button>
                  <button onClick={() => handleDelete(post._id)}> Delete </button>
              </div>
            </>
        )}
        </div>
      ))}
    </div>
  )
}

export default App;
