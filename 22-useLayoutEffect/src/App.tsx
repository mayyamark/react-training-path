import { useLayoutEffect } from "react";

const App = () => {
  useLayoutEffect(() => {
    const input = document.getElementById("focus-input");
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <div>
      <input />
      <input />
      <input />
      <input id="focus-input" />
      <input />
      <input />
    </div>
  );
};

export default App;
