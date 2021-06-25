import classes from "./CssModule.module.scss";

export const CssModuleStyle = () => {
  return (
    <div className={classes.containerCssModuleStyle}>
      <p> -- cssModuleStyle -- </p>
      <button className={classes.button}>Edit to see some magic happen!</button>
    </div>
  );
};
