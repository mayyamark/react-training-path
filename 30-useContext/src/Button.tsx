import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Button = () => {
  const { user, login, logout } = useContext(UserContext);

  const handleClick = () => {
    if (user) {
      logout();
    } else {
      login({ 
        username: 'mayyamark',
        firstName: 'Mayya',
        lastName: 'Markova',
        email: 'mayya.markova@accedia.com',
        dateOfBirth: new Date('05/20/1997'),
      });
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{user ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default Button;
