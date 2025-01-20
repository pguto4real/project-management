import React from "react";
import Button from "./Button";

const ProjectSidebar = ({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) => {
  console.log(projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map(({ title, id }) => {
          let cssClasses = `w-full text-left px-2 py-1 rounded-sm my-1
        hover:text-stone-200 hover:bg-stone-800 capitalize`;
          if (id === selectedProjectId) {
            cssClasses += " text-stone-20 bg-stone-800";
          } else {
            cssClasses += "   text-stone-400 ";
          }
          return (
            <li key={id}>
              <button
                onClick={() => onSelectProject(id)}
                className={cssClasses}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
