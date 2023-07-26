import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Createhabit from "./Createhabit";
import TrackHabit from "./TrackHabit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-habit" element={<Createhabit />} />
        <Route path="/track-habit" element={<TrackHabit />} />
      </Routes>
    </div>
  );
}

export default App;
