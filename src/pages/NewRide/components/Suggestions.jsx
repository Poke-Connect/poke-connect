const Suggestions = (props) => {
  return (
    <div className="flex flex-col">
      <strong>{props.main_text}</strong> <small>{props.secondary_text}</small>
    </div>
  );
};

export default Suggestions;
