import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ addTask }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    const taskData = {
      taskTitle: enteredTask,
    };
    addTask(taskData);
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops ... looks like you forgot to add a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provided a valid value for every input field.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          value={enteredTask}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
