import { Film } from './films';

interface FilmItemProps {
  film: Film;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  return (
    <li>
      <h2>{film.title}</h2>
      <p><strong>Description:</strong> {film.description}</p>
      <p><strong>Release Year:</strong> {film.releaseYear}</p>
      <p><strong>Genre:</strong> {film.genre}</p>
      <p><strong>Main Actors:</strong> {film.mainActors.join(', ')}</p>
    </li>
  );
};

export default FilmItem;
