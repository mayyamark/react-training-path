import { useState } from "react";
import HomePage from "./HomePage";

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return (
    <HomePage user={user} login={login} logout={logout} />
  );
}

export default App;
