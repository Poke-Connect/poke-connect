import Toggle from "react-toggle";
import "react-toggle/style.css";

const ToggleButton = (props) => {
  const { toggleState, handleToggleChange } = props;
  return (
    <label>
      <Toggle defaultChecked={toggleState} onChange={handleToggleChange} />
    </label>
  );
};

export default ToggleButton;
