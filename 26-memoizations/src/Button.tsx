import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  console.log(`Button ${props.children} re-rendered`);
  return (
    <button 
      style={{ 
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "5px",
      }} 
      {...props} />
  );
};

export default memo(Button);
