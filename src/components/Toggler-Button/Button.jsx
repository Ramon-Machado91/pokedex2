import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/Theme-context";

const Button = ({ props }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle">
      <img
        onClick={toggleTheme}
        src="/assets/dark-theme.png"
        alt="button"
        {...props}
      />
    </div>
  );
};

export default Button;
