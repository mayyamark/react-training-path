import './App.css';

const App = () => {
  return (
    <div className="card">
      <div>
        <h2 className="card-title">John Doe</h2>
        <p className="card-description">
          React Developer
        </p>
      </div>
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="John Doe"
        className="card-image"
      />
    </div>
  );
}

export default App;
