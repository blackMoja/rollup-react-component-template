import React from "react";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { title } = props;
  return <div>{title ?? "Card Component"}</div>;
};

export default Card;
