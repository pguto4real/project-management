import React, { useRef } from "react";
import { Input } from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDuedate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Ooops ... looks like you forgot to add a value.</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provided a valid value for every input field.
        </p>
      </Modal>
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
    </>
  );
};

export default NewProject;
