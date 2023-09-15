import { useState } from "react";

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");

  console.log("Controlled form re-rendered", { value: inputValue })

  return (
    <div>
      <label htmlFor="controlled">Controlled Input</label>
      <input 
        id="controlled" 
        type="text" 
        onChange={(ev) => setInputValue(ev.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default ControlledInput;
