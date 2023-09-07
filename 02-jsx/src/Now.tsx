const Now = () => {
  return (
    <>
      <p>Date now: {new Date().toLocaleDateString()}</p>
      <p>Time now: {new Date().toLocaleTimeString()}</p>
    </>
  );
}

export default Now;
