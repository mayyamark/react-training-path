import { User } from './App';

interface ContentProps {
  user: User | null;
}

const Content: React.FC<ContentProps> = ({ user }) => {
  return (
    <div>
      {user 
        ? <>
            <i>Here is your full information:</i>
            <p>First name: <b>{user.firstName}</b></p>
            <p>Last name: <b>{user.lastName}</b></p>
            <p>Username: <b>{user.username}</b></p>
            <p>Email: <b>{user.email}</b></p>
            <p>Date of birth: <b>{user.dateOfBirth.toLocaleDateString()}</b></p>
          </> 
        : <i>Use the button to log in</i>}
    </div>
  );
};

export default Content;
