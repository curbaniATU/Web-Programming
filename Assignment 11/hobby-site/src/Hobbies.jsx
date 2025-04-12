import { useEffect, useState } from "react";
import axios from "axios";

function Hobbies() {
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/hobbies")
            .then((res) => {
                setHobbies(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    },[]);

    return (
        <div style={{
            maxWidth: "600px",
            margin: "40px auto",
            padding: "20px",
            backgroundColor: "#f4f4f8",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "'Segoe UI', sans-serif"
        }}>
            <h2 style={{
                fontSize: "1.8rem",
                color: "#333",
                marginBottom: "20px",
                textAlign: "center"
            }}>Hobbies</h2>
            <ul style={{listStyle: "none", padding: "0"}}>
                {hobbies.map((item) => (
                    <li style={{backgroundColor: "#fff",
                        padding: "15px",
                        margin: "10px 0",
                        borderRadius: "8px",
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                        color: "#333",
                    }} key={item.id}>
                        Hobby: {item.activity} <br />
                        Description: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;