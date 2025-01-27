import "./styles.css";
import { InputProps } from "./types";
import { InputContainer, Label, InputElement } from "./styles";

function Input({
  name,
  type = "text",
  placeholder,
  label,
  input_id,
}: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={input_id}>{label}</Label>
      <InputElement
        name={name}
        id={input_id}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
