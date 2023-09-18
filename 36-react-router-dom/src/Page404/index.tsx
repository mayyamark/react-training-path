import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <Link to="/">Go to the home page</Link>
    </div>
  );
};

export default Page404;
