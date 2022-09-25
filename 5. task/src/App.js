import "./App.css";
import Task from "./components/Task";
import React from "react";

function App() {
  const [listoftask, setListOfTask] = React.useState([]);
  const [task, setTask] = React.useState({
    id: "",
    task: "",
  });

  function addTask(event) {
    event.preventDefault();

    if (task.id) {
      deleteTask(task.id);
    }

    setListOfTask((prevListOfTask) => [
      ...prevListOfTask,
      {
        id: task.id ? listoftask.length -1 : listoftask.length ,
        task: task.task,
      },
    ]);

    setTask((prevTask) => ({
      ...prevTask,
      id: "",
      task: "",
    }));
  }

  function settingTask(event) {
    setTask((prevTask) => ({
      ...prevTask,
      task: event.target.value,
    }));
  }

  function deleteTask(id) {
    const taskDelete = [...listoftask.filter((item) => item.id !== id)];
    for(let i =0; i<taskDelete.length; i++){
      taskDelete[i].id = i
    }
    setListOfTask(taskDelete)
  }

  function updateTask(id) {
    setTask((prevTask) => ({
      ...prevTask,
      id: id,
      task: listoftask[id].task,
    }));
  }

  console.log(listoftask);
  console.log(task);

  return (
    <div>
      <center>
        <form onSubmit={addTask}>
          <input
            name="word"
            onChange={settingTask}
            value={task.task}
            autoFocus
          />
          <button>Add</button>
        </form>
        {listoftask
          .map((item) => (
            <Task
              key={item.id}
              task={item.task}
              id={item.id}
              deleteId={deleteTask}
              updateTask={updateTask}
            />
          ))
          .reverse()}
      </center>
    </div>
  );
}

export default App;
