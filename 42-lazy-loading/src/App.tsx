import { useState, lazy, Suspense } from 'react';

// We are slowing down the proccess in order to see the loader
const Image = lazy(() => (
  new Promise(resolve => setTimeout(resolve, 3000))
    .then(() => import('./Image'))
));

const App = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className='App'>
      {!showImage && (
        <button onClick={() => setShowImage(true)}>Show image</button>
      )}
      {showImage && (
        <Suspense fallback={<div>Loading...</div>}>
          <Image />
        </Suspense> 
      )}
    </div>
  );
}

export default App;
