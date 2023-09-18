import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ border: '1px solid silver', margin: 25, padding: 25 }}>
      <h2>Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
