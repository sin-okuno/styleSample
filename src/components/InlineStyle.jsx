export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px red",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    margin: "10px"
  };
  return (
    <div className="InlineStyle" style={containerStyle}>
      <p> -- inlineStyle -- </p>
      <button>Edit to see some magic happen!</button>
    </div>
  );
};
