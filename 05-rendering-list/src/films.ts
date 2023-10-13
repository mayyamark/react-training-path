export interface Film {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  mainActors: string[];
}

export const films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genre: "Drama",
    mainActors: ["Tim Robbins", "Morgan Freeman"]
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genre: "Crime",
    mainActors: ["Marlon Brando", "Al Pacino"]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genre: "Crime",
    mainActors: ["John Travolta", "Samuel L. Jackson"]
  },
  {
    id: 4,
    title: "Inception",
    description: "A thief who enters the dreams of others to steal their secrets gets a chance to redeem himself when he is tasked with planting an idea into someone's mind.",
    releaseYear: 2010,
    genre: "Science Fiction",
    mainActors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
  },
  {
    id: 5,
    title: "The Dark Knight",
    description: "When the menace known as the Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
    genre: "Action",
    mainActors: ["Christian Bale", "Heath Ledger"]
  }
];