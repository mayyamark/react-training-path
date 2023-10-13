import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);    
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [count]);
  

  return (
    <div>
      Counter: {count}
    </div>
  );
};

export default App;
