import React from "react";

export const Input = ({ label, isTextarea, ...props }) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {isTextarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};
