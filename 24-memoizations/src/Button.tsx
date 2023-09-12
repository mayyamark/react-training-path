import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  console.log(`Button ${props.children} re-rendered`);
  return <button {...props} />;
};

export default memo(Button);
