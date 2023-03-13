import React, { FC } from "react";

interface IProps {
  id: any;
  name: any;
  placeholder: any;
  value: any;
  onChange: any;
  onBlur?: any;
  type: any;
}

const EditInput: FC<IProps> = (props) => {
  const { id, name, placeholder, value, onChange, onBlur, type } = props;
  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className="p-2 rounded-lg bg-lightGray placeholder-typeText text-black m-2 h-10 w-full"
      />
    </div>
  );
};

export default EditInput;
