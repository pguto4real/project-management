import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ addTask, projectId, tasks }) => {
  console.log(tasks);
  //   let taskContent = (

  //   );
  let taskContent =
    tasks.length > 0 ? (
      <ul>
        {tasks.map(({ taskTitle, id }) => {
          return <li key={id}>{taskTitle}</li>;
        })}
      </ul>
    ) : (
      <p className="text-stone-800 my-4">
        This project does not have any tasks
      </p>
    );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask addTask={addTask} projectId={projectId} />
      {taskContent}
    </section>
  );
};

export default Tasks;
