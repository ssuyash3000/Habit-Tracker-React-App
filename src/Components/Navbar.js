import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Habit Tracker</h1>

      <ul className="nav-item">
        <li>
          <Link to="/create-habit">Add Habit</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/track-habit">Track Habit</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
