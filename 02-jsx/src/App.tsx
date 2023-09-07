const Now = () => {
  return (
    <>
      <p>Date now: {new Date().toLocaleDateString()}</p>
      <p>Time now: {new Date().toLocaleTimeString()}</p>
    </>
  );
}

const App = () => {
  return (
    <Now />
  );
};

export default App;
