interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>
}


const App = () => {
  return (
    <Header title="Hello world" />
  );
};

export default App;
