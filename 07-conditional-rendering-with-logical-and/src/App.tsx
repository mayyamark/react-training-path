import { useState } from "react";
import Greeting from "./Greeting";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
      <Greeting isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
