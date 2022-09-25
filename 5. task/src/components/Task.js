import React from "react";

export default function Task(props) {
  return (
    <center>
      <div className="task-holder">
        <h3>{props.task} </h3>
        <button className="del-but" onClick={() => props.deleteId(props.id)}>
          Delete
        </button>
        <button className="del-but" onClick={() => props.updateTask(props.id)}>
          Update
        </button>
      </div>
    </center>
  );
}
