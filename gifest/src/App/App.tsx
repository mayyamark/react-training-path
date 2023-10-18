import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import TrendingPage from "../TrendingPage/TrendingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<TrendingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
