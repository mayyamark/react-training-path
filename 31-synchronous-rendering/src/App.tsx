import { useState, ChangeEvent } from "react";
import List from "./List";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} min={0} />
      <List query={inputValue} />
    </div>
  );
}

export default App;
