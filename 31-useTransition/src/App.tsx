import { useState, ChangeEvent, useTransition } from "react";
import List from "./List";


const App = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
    startTransition(() => {
      setQuery(ev.target.value);
    });
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} min={0} />
      <div>{isPending ? "Loading..." : <List query={query} />}</div>
    </div>
  );
}

export default App;

