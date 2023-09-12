import { useState, useCallback, useMemo } from "react";
import Button from "./Button";
import Title from "./Title";

const App = () => {
  const [count, setCount] = useState(0);

  const value = useMemo(() => Math.random(), []);

  // This doesn't need to be memoizet, since we are updating a state variable
  const handleIncrement = () => setCount(count + 1);

  const handleLog = useCallback(() => console.log("Hi"), []);

  console.log("App re-rendered", value);

  return (
    <div>
      <Title title="Counter" />
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleLog}>Log</Button>
      <p>{count}</p>
    </div>
  );
};

export default App;
