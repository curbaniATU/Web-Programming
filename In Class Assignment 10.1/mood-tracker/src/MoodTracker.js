import { useState } from "react";

export default function MoodTracker() {
    const [mood, setMood] = useState("😊");

    return(
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <button onClick={() => setMood("😂")} style={{margin:"5px", padding:"10px", background:"lightgreen"}}>Very Happy</button>
            <button onClick={() => setMood("😭")} style={{margin:"5px", padding:"10px", background:"lightblue"}}>Upset</button>
            <button onClick={() => setMood("😒")} style={{margin:"5px", padding:"10px", background:"red"}}>Unamused</button>
            <button onClick={() => setMood("😁")} style={{margin:"5px", padding:"10px", background:"yellow"}}>Beaming</button>
        </div>
    );

}