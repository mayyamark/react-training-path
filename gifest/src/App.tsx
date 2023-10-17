import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home page</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
