import { Link, useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  return (
    <div>
      <h3>
        Welcome to the {id.split("-").join(" ").toUpperCase()} course!
      </h3>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

export default Course;
