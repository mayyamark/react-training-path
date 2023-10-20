import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import GifsPage from "../GifsPage/GifsPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { API_KEY, GET_ENDPOINT, UPLOAD_ENDPOINT } from "../constants";
import { useState, useEffect, ChangeEvent } from "react";
import NothingFound from "../NothingFound/NothingFound";
import UploadPage from "../UploadPage/UploadPage";

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

  const handleFavouriteGif = (id: string) => {
    setFavourites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  console.log({favourites, uploads})
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
                  url={`${GET_ENDPOINT}/trending?api_key=${API_KEY}`}
                  title='Trending'
                  onDoubleClickGif={handleFavouriteGif}
                />
              } 
            />
            <Route 
              path='/favourites' 
              element={
                favourites.length > 0 ? (
                  <GifsPage
                    url={`${GET_ENDPOINT}?ids=${favourites.join(',')}&api_key=${API_KEY}`}
                    title='Favourites'
                    onDoubleClickGif={handleFavouriteGif}
                    infiniteScroll={false}
                  />
                ) : (
                  <NothingFound 
                    endpoint={`${GET_ENDPOINT}/random?tag=like&api_key=${API_KEY}`}
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
                    url={`${GET_ENDPOINT}?ids=${uploads.join(',')}&api_key=${API_KEY}`}
                    title='My gifs'
                    onDoubleClickGif={handleFavouriteGif}
                    infiniteScroll={false}
                  />
                ) : (
                  <NothingFound 
                    endpoint={`${GET_ENDPOINT}/random?tag=upload&api_key=${API_KEY}`}
                    title={<>You have no uploads yet!<br />Here's a random gif for you:</>}
                  />
                )
              } 
            />
            <Route 
              path='/search' 
              element={
                <GifsPage
                  url={`${GET_ENDPOINT}/search?q=${query}&api_key=${API_KEY}`}
                  title={`We found these "${query}" gifs:`}
                  onDoubleClickGif={handleFavouriteGif}
                />
              }
            />
            <Route 
              path='/upload' 
              element={(
                <UploadPage 
                  endpoint={`${UPLOAD_ENDPOINT}?api_key=${API_KEY}`}
                  onUploadCallback={(id: string) => {
                    console.log('here App')
                    setUploads((prev: string[]) => [...prev, id])
                  }}
                />
              )} 
            />
            <Route 
              path='*' 
              element={
                <NothingFound
                  endpoint={`${GET_ENDPOINT}/random?tag=404&api_key=${API_KEY}`}
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
