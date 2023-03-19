import { InputHTMLAttributes } from "react";
import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label: string;
   className?: string;
}

const Input: React.FC<InputProps> = ({ name, label, className, ...rest }) => {
   const classes = className ? `input-wrapper ${className}` : "input-wrapper";

   return (
      <div className={classes}>
         <label htmlFor={name}>{label}</label>
         <input type="test" id={name} {...rest} />
      </div>
   );
};

export default Input;
