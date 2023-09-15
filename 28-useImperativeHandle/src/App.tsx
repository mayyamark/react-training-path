import { useRef } from "react";
import TextArea from "./TextArea";

const App = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  return (
    <div>
      <TextArea ref={ref} />
      <button onClick={handleClick}>Focus Text Area</button>
    </div>
  );
}

export default App;
