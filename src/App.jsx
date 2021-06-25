import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModuleStyle } from "./components/CssModuleStyle";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModuleStyle />
      <StyledJsx />
    </div>
  );
};
