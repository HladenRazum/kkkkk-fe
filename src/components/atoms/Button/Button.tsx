import { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   type: "submit" | "button";
   text: string;
   className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, className, ...rest }) => {
   const classes = className ? `button ${className}` : "button";

   return (
      <button className={classes} {...rest} type={type}>
         {text}
      </button>
   );
};

export default Button;
