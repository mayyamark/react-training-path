import { Routes, Route, BrowserRouter } from "react-router-dom";
import Page404 from "../Page404";
import Layout from "../Layout";
import Home from "../Home";
import Courses from "../Courses";
import CoursesIndex from "../CoursesIndex";
import Course from "../Course";

const App = () => {
  return (
    <BrowserRouter>
      <h1>React Router DOM Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route index element={<CoursesIndex />} />
            <Route path="/courses/:id" element={<Course />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
