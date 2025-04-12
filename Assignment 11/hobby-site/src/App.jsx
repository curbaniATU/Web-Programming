import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Person from "./Person";
import Hobbies from "./Hobbies";

function App() {

  return (
    <Router>
      <div>
        <nav style={{flexDirection: "row", justifyContent: "space-around", padding: "20px"}}>
          <Link style={{color:"white", fontWeight:"bold", padding:"10px"}} to="/">Personal Info</Link>
          <Link style={{color:"white", fontWeight:"bold", padding:"10px"}} to="/hobbies">Hobbies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Person />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
