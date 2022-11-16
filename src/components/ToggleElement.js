import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

const ToggleElement = (props) => {
  const { toggleState, handleToggleChange } = props;
  return (
    <label>
      <Toggle
        defaultChecked={toggleState}
        onChange={handleToggleChange}
        icons={false}
      />
    </label>
  );
};

export default ToggleElement;
