import { useRef } from 'react';

const App = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  return (
    <div>
      <textarea ref={ref} />
      <button onClick={handleClick}>Focus Text Area</button>
    </div>
  );
}

export default App;
