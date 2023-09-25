import { Suspense } from "react";
import Content from "./Content";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>An error occurred...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
