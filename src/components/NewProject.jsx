import React, { useRef } from "react";
import { Input } from "./Input";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = dueDate.current.value;
    onAdd({
      title: enteredDuedate,
      description: enteredDescription,
      dueDate: enteredDuedate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} ref={title} type="text" />
        <Input label={"Description"} isTextarea ref={description} />
        <Input label={"Due Date"} ref={dueDate} type="date" />
      </div>
    </div>
  );
};

export default NewProject;
