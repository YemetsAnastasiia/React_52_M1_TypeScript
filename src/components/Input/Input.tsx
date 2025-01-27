import "./styles.css";
import { InputProps } from "./types";


function Input({ name, type = 'text', placeholder, label, input_id }: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={input_id}>{label}</label>
      <input
        name={name}
        id={input_id}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  );
}

export default Input;
