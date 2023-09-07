interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return ( 
    <div>
      <h1>Hello!</h1>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div> 
  ); 
} 

export default Greeting;
