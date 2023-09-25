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
