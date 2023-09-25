import { Suspense } from "react";
import Pokemons from "./Pokemons";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>An error occurred...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Pokemons />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
