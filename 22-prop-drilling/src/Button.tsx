import { User } from "./App";

interface ButtonProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const Button: React.FC<ButtonProps> = ({ user, login, logout }) => {
  const handleClick = () => {
    if (user) {
      logout();
    } else {
      login({ 
        username: "mayyamark",
        firstName: "Mayya",
        lastName: "Markova",
        email: "mayya.markova@accedia.com",
        dateOfBirth: new Date("05/20/1997"),
      });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{user ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Button;
