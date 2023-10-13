import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);    
    }, 1000);
  
    return () => clearInterval(interval);
  }, [count]);
  

  return (
    <div>
      Counter: {count}
    </div>
  );
};

export default App;
