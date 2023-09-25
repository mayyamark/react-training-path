import fetchPokemons from "./fetchPokemons";

const data = fetchPokemons();

const Pokemons = () => {
  const pokemons = data.read();

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons?.map((p) => <p key={p.name}>{p.name}</p>)}
    </div>
  );
}

export default Pokemons;
