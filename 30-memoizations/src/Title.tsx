import React, { memo } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  console.log("Title re-rendered");
  return <h1>{title}</h1>;
};

export default memo(Title);
