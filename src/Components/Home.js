import Habit from "./Habit";
import "../Styles/Home.css";
function Home(props) {
  let { habitList } = props;
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="home">
      {habitList.length === 0 && <h1>Add Habits to keep track of...</h1>}
      <h2>
        Todays Date - {date.getDate()} / {months[date.getMonth()]} /{" "}
        {date.getFullYear()} <br /> {days[date.getDay()]}
      </h2>
      <div className="habit-ctn">
        {habitList.map((habit) => {
          return <Habit title={habit.title} doneStatus={habit.status} />;
        })}
      </div>
    </div>
  );
}

export default Home;
