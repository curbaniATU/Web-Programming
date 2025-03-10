import { useState } from "react";
import "./MoodTracker.css";

export default function MoodTracker() {
    const [mood, setMood] = useState("Select a mood below to get started!");
    const[moodImage, setMoodImage] = useState("logo192.png");
    const[moodReason, setMoodReason] = useState("I am feeling happy today!");
    const[moodColor, setMoodColor] = useState("black");

    const selectPeace = () => {
        setMood("I am feeling peaceful today!");
        setMoodImage("thunderstorms.png");
        setMoodReason("Unlike most people, thunderstorms make me feel relaxed and at peace. The sound of thunder echoing and the rain hitting the window is just the perfect white noise.");
    };
    const selectStressed = () => {
        setMood("I am feeling stressed today!");
        setMoodImage("finals.png");
        setMoodReason("Finals and an overload of schoolwork always makes me feel stressed out. Honestly who doesn't get stressed out by finals?");
    };
    const selectHappy = () => {
        setMood("I am feeling happy today!");
        setMoodImage("puppy.png");
        setMoodReason("I don't think I need to explain why a dog makes me happy. Who doesn't love dogs? I used to have four dogs, and they always brightened my day. One of them hated thunderstorms and would always crawl under my desk before trying to dig his way through my floor. Now I unfortunately don't have any pictures of my dogs currently, so here's a random labrador.");
    };

    return(
        <div style={{display: "block", textAlign:"center", padding:"20px", border: "2px solid black", borderRadius:"10px", width:"50%", margin:"auto", background:"lightblue", marginTop:"110px", marginBottom:"auto"}}>
            <h1 style={{fontFamily: "Brush Script MT"}}>Caleb's Mood Tracker</h1>
            <p style={{fontSize:"18px", fontWeight:"bold", fontFamily: "Helvetica"}}>{mood}</p>
            <img src={moodImage} style={{width:"50%", height:"50%", borderRadius:"15px"}} alt="Mood" />
            <br />
            <p>{moodReason}</p>
            <button onClick={selectPeace} style={{margin:"5px", padding:"10px", background:"yellow"}}>Peace</button>
            <button onClick={selectStressed} style={{margin:"5px", padding:"10px", background:"red"}}>Stressed</button>
            <button onClick={selectHappy} style={{margin:"5px", padding:"10px", background:"lightgreen"}}>Happy</button>
        </div>
    );

}