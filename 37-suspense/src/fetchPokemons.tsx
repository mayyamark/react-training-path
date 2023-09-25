interface Pokemon {
  name: string;
  url: string;
}

const wrapPromise = (promise: Promise<Pokemon[]>) => {
  let status = 'pending';
  let response: Pokemon[] = [];

  const suspender = promise.then(
    res => {
      status = 'success';
      response = res;
    },
    err => {
      status = 'error';
      response = err;
    },
  );

  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };

  const read = () => {
    const result = (
      handler[status as keyof typeof handler]
    ) ? (
      handler[status as keyof typeof handler]()
    ) : (
      handler.default()
    );
    return result;
  };

  return { read };
};

const fetchPokemons = () => {
  const promise = fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => data.results);

  return wrapPromise(promise);
};

export default fetchPokemons;
