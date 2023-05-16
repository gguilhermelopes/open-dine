import { ChangeEventHandler } from "react";

interface InputProps {
  id: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
  width?: string;
}

const Input = ({
  id,
  type,
  placeholder,
  className,
  width,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`border rounded px-2 py-3 ${className} w-[${width}]`}
    />
  );
};

export default Input;
