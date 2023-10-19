import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import GifsPage from "../GifsPage/GifsPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { API_KEY, GET_ENDPOINT } from "../constants";
import { useState, useEffect } from "react";

const App = () => {
  const [favourites, setFavourites] = useState<string[]>(JSON.parse(localStorage.getItem('favourite-gifs') as string) || []);
  const [uploads, setUploads] = useState(JSON.parse(localStorage.getItem('uploaded-gifs') as string) ||[]);

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

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
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
                <GifsPage
                  url={`${GET_ENDPOINT}?ids=${favourites.join(',')}&api_key=${API_KEY}`}
                  title='Favourites'
                  onDoubleClickGif={handleFavouriteGif}
                  infiniteScroll={false}
                />
              } 
            />
            <Route 
              path='/my-gifs' 
              element={
                <GifsPage
                  url={`${GET_ENDPOINT}?ids=${uploads.join(',')}&api_key=${API_KEY}`}
                  title='My gifs'
                  onDoubleClickGif={handleFavouriteGif}
                  infiniteScroll={false}
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
