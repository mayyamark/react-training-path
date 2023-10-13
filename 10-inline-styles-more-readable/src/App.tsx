const styles = { 
  container: {
    color: 'blue', 
    backgroundColor : 'aliceblue', 
    padding: 20, 
  },
};

const App = () => {
  return (
    <div 
      style={styles.container}> 
      Inline Styled Component
    </div>
  );
}

export default App;
