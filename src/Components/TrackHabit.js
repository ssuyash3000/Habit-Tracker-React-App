import "../Styles/TrackHabit.css";
function TrackHabit(props) {
  let { habitList } = props;

  let dayArray = [];
  for (let i = 0; i < 7; i++) dayArray.push(i + 1);
  return (
    <div className="track-ctn">
      {habitList.map((habit, index) => {
        return (
          <div className="track-habit" key={index}>
            <h1> Habit - {habit.title} </h1>
            {dayArray.map((day) => {
              let action = "No action Taken";
              if (habit.Days[day] !== undefined) action = habit.Days[day];
              return (
                <div className="track-list" key={day}>
                  Day - {day} {action}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TrackHabit;
