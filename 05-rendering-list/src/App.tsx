import FilmList from "./FilmList";
import { films } from "./films";

const App = () => {
  return (
    <FilmList films={films} />
  );
};

export default App;
