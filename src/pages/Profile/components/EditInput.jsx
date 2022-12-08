import React from "react";

const EditInput = (props) => {
  return (
    <div>
      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        className="p-2 rounded-lg bg-lightGray placeholder-typeText text-black m-2 h-10"
      />
    </div>
  );
};

export default EditInput;
