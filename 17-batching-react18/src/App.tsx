import { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  // Sync Function call
  // const handleClick = () => {
  //   setName('Leanne Graham');
  //   setEmail('Sincere@april.biz');
  // };

  // Async Function call
  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
      }
    );
  };

  useEffect(() => {
    console.log(`useEffect called: ${name} ${email}`);
  }, [name, email]);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={handleClick}>Print values</button>
    </div>
  );
}

export default App;
