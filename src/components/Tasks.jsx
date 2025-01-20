import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ addTask, tasks, deleteTask }) => {
  let taskContent =
    tasks.length > 0 ? (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map(({ taskTitle, id }) => {
          return (
            <li key={id} className="flex justify-between my-4">
              <span>{taskTitle}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTask(id)}
              >
                Clear
              </button>
            </li>
          );
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
      <NewTask addTask={addTask} />
      {taskContent}
    </section>
  );
};

export default Tasks;
