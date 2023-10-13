import { useState } from 'react';
import HomePage from './HomePage';
import { User, UserContext } from './context/UserContext';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout
    }}>
      <h1>{user ? `Welcome back, ${user.firstName}!` : 'Hello!'}</h1>
      <HomePage />
    </UserContext.Provider>
  );
}

export default App;
