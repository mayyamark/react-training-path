import { User } from './App';
import Button from './Button';
import Content from './Content';

interface HomePageProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ user, login, logout }) => {
  return (
    <div>
      <Content user={user} />
      <Button user={user} login={login} logout={logout} />
    </div>
  );
};

export default HomePage;
