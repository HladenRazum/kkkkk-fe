import { InputHTMLAttributes } from "react";
import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
   label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
   return (
      <div className="input-wrapper">
         <label htmlFor={name}>{label}</label>
         <input type="test" id={name} {...rest} />
      </div>
   );
};

export default Input;