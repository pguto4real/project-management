import React from "react";
import Button from "./Button";

const SelectedProject = ({ projects }) => {
  const { title, description, dueDate } = projects;

  const formatteddate = new Date(dueDate).toLocaleDateString('en-US');
  return (
    <div>
      <header>
        <div>
          <h1>{title}</h1>
          <Button>Delete</Button>
        </div>
        <p>{formatteddate}</p>
        <p>{description}</p>
      </header>
    </div>
  );
};

export default SelectedProject;
