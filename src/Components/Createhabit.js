import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/createhabit.css";
function Createhabit(props) {
  let { habitList, setHabitList } = props;
  let [habitInput, setHabitInput] = useState("");
  let [giveMessage, setGiveMessage] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (habitInput === "") {
      setGiveMessage(true);
      setTimeout(() => {
        setGiveMessage(false);
      }, 2000);
      return;
    }
    setGiveMessage(false);
    let newHabit = {
      title: habitInput,
      status: "No action Taken",
    };
    habitList.push(newHabit);
    setHabitList(habitList);
    // setHabitInput("");
    navigate("/");
  };
  return (
    <div className="createhabit">
      <h1>Create Habit</h1>
      <form onSubmit={handleSubmit} className="form-field">
        <label className="input-lable"> Habit Name - </label>
        <input
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          placeholder="Enter name of your habit here"
          className="input-bar"
        />
        {giveMessage === true && <h4>Provide a valid habit name</h4>}
        <button className="submit-btn">Add Habit</button>
      </form>
    </div>
  );
}

export default Createhabit;
