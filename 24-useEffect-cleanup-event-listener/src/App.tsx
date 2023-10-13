import { useEffect, useState } from 'react';

const App = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = (event: Event) => {
      setWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Resize the window to change the width!</p>
      <h1>Current width: {width}</h1>
    </div>
  );
};

export default App;
