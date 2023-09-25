import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const Pokemons = () => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const json = await response.json();
        
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
  
        setData(json.results);
        setLoading(false);
      } catch(err) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>An error occured</div>
  }

  return (
    <div>
      <h1>Pokemons</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((p) => <p key={p.name}>{p.name}</p>)
      )}
    </div>
  );
}

export default Pokemons;
