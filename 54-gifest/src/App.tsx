import { useState, useEffect, ChangeEvent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/molecules/ErrorBoundary/ErrorBoundary';
import Layout from './components/molecules/Layout/Layout';
import GifsPage from './components/organisms/GifsPage/GifsPage';
import NothingFoundPage from './components/organisms/NothingFoundPage/NothingFoundPage';
import UploadPage from './components/organisms/UploadPage/UploadPage';

const App = () => {
  const [query, setQuery] = useState((
    new URL(window.location.href).searchParams.get('query')
    ) || ''
  );
  const [favourites, setFavourites] = useState<string[]>((
    JSON.parse(localStorage.getItem('favourite-gifs') as string)
    ) || []
  );
  const [uploads, setUploads] = useState((
    JSON.parse(localStorage.getItem('uploaded-gifs') as string)
    ) || []
  );

  useEffect(() => {
    localStorage.setItem('favourite-gifs', JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem('uploaded-gifs', JSON.stringify(uploads));
  }, [uploads]);

  const isFavourite = (id: string) => favourites.includes(id);

  const handleFavourite = (id: string) => {
    setFavourites((prev) => {
      if (isFavourite(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };


  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={(
              <Layout 
                inputProps={{
                  value: query, 
                  onChange: (ev: ChangeEvent<HTMLInputElement>) => (
                    setQuery(ev.target.value)
                  ),
                }}
              />
            )}
          >
            <Route 
              path='/' 
              index 
              element={
                <GifsPage 
                  endpoint={`${process.env.REACT_APP_GET_ENDPOINT}/trending?api_key=${process.env.REACT_APP_API_KEY}`}
                  title='Trending'
                  updateFavourites={handleFavourite}
                  isFavourite={isFavourite}
                />
              } 
            />
            <Route 
              path='/search' 
              element={
                <GifsPage
                  endpoint={`${process.env.REACT_APP_GET_ENDPOINT}/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}`}
                  title={`We found these '${query}' gifs:`}
                  updateFavourites={handleFavourite}
                  isFavourite={isFavourite}
                />
              }
            />
            <Route 
              path='/favourites' 
              element={
                favourites.length > 0 ? (
                  <GifsPage
                    endpoint={`${process.env.REACT_APP_GET_ENDPOINT}?ids=${favourites.join(',')}&api_key=${process.env.REACT_APP_API_KEY}`}
                    title='Favourites'
                    updateFavourites={handleFavourite}
                    isFavourite={isFavourite}
                    infiniteScroll={false}
                  />
                ) : (
                  <NothingFoundPage 
                    endpoint={`${process.env.REACT_APP_GET_ENDPOINT}/random?tag=like&api_key=${process.env.REACT_APP_API_KEY}`}
                    title={<>You have no favourites yet!<br />Here's a random gif for you:</>}
                  />
                )
              } 
            />
            <Route 
              path='/my-gifs' 
              element={
                uploads.length > 0 ? (
                  <GifsPage
                    endpoint={`${process.env.REACT_APP_GET_ENDPOINT}?ids=${uploads.join(',')}&api_key=${process.env.REACT_APP_API_KEY}`}
                    title='My gifs'
                    updateFavourites={handleFavourite}
                    isFavourite={isFavourite}
                    infiniteScroll={false}
                  />
                ) : (
                  <NothingFoundPage 
                    endpoint={`${process.env.REACT_APP_GET_ENDPOINT}/random?tag=upload&api_key=${process.env.REACT_APP_API_KEY}`}
                    title={<>You have no uploads yet!<br />Here's a random gif for you:</>}
                  />
                )
              } 
            />
            <Route 
              path='/upload' 
              element={(
                <UploadPage 
                  endpoint={`${process.env.REACT_APP_UPLOAD_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}`}
                  onUploadCallback={(id: string) => {
                    setUploads((prev: string[]) => [...prev, id])
                  }}
                />
              )} 
            />
            <Route 
              path='*' 
              element={
                <NothingFoundPage
                  endpoint={`${process.env.REACT_APP_GET_ENDPOINT}/random?tag=404&api_key=${process.env.REACT_APP_API_KEY}`}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
