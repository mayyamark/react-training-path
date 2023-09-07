interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return null; 
  }

  return <h1>Welcome back!</h1>
}

export default Greeting;
