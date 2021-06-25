export const StyledJsx = () => {
  return (
    <>
      <div className="StyledJsx">
        <p> -- StyledJsx -- </p>
        <button>StyledJsxボタン</button>
      </div>
      <style jsx="true">
        {`
          .StyledJsx {
            border: solid 2px blue;
            border-radius: 30px;
            display: flex;
            justify-content: space-around;
            padding: 10px;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};
