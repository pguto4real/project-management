import React from "react";
import Button from "./Button";
import Tasks from "./Tasks";

const SelectedProject = ({ project, onDelete, addTask,tasks }) => {
  console.log(project);
  console.log(tasks);
  const { title, description, dueDate, id } = project;

  const formatteddate = new Date(dueDate).toLocaleDateString("en-US");
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formatteddate}</p>
        <p className="text-stone-400 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks addTask={addTask}tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;
