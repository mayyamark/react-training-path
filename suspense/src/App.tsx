import { Suspense } from "react";
import Pokemons from "./Pokemons";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pokemons />
    </Suspense>
  );
}

export default App;
