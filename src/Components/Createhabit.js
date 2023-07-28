import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/createhabit.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
function Createhabit(props) {
  const navigate = useNavigate();
  let [habitInput, setHabitInput] = useState("");
  let [giveMessage, setGiveMessage] = useState(false);
  let { habitList } = props;

  let date = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitInput === "") {
      setGiveMessage(true);
      setTimeout(() => {
        setGiveMessage(false);
      }, 2000);
      return;
    }
    const habits = firebase.firestore().collection("Habits");
    const arrayRef = habits.doc("v27GQa68JwIYH8gQrjV3");
    setGiveMessage(false);
    let infoObj = {};
    infoObj[date.getDay().toString()] = "No Action Taken";
    let newHabit = {
      title: habitInput,
      Days: { ...infoObj },
    };
    habitList.push(newHabit);

    let HabitList = [...habitList];
    arrayRef.update({ HabitList }).then(() => {
      console.log("Inc Updation Success");
    });
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
