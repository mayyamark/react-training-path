import FilmItem from "./FilmItem";
import { Film } from "./films";

interface FilmsListProps {
  films: Film[];
}

const FilmList: React.FC<FilmsListProps> = ({ films }) => {
  return (
    <div>
      <h1>Film List</h1>
      <ul>
        {films.map((film) => (
          <FilmItem key={film.id} film={film} />
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
