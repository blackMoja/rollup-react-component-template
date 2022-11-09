import React from "react";
interface ButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label ?? "테스트 입니다."}</button>;
};

export default Button;
