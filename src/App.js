import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([{ id: 1, task: "시험 통과하기" }]);
  const [task, setTask] = useState("");

  const taskInputHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, task }]);
    setTask("");
  };

  return (
    <div className="Container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="Input-task"
          placeholder="내용을 입력해주세요."
          value={task}
          onChange={taskInputHandler}
        />
        <button type="submit" className="Submit-task ">
          추가
        </button>
      </form>
      <h1>⭐To do List⭐</h1>
      <div>
        {tasks.map((task) => (
          <div className="Task-box" key={task.id}>
            <p>{task.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
