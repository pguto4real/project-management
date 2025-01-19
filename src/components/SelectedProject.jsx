import React from "react";
import Button from "./Button";

const SelectedProject = ({ project }) => {
  const { title, description, dueDate } = project;

  const formatteddate = new Date(dueDate).toLocaleDateString("en-US");
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <Button>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formatteddate}</p>
        <p className="text-stone-400 whitespace-pre-wrap">{description}</p>
      </header>
    </div>
  );
};

export default SelectedProject;
