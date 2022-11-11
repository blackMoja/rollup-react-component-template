import React from "react";

interface InputProps {
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { onChange } = props;
  return <input type="text" onChange={(e) => onChange?.(e.target.value)} />;
};

export default Input;
