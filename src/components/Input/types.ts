export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  placeholder?: string;
  label ?: string;
  input_id ?: string;
}
