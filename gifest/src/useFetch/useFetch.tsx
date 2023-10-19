import { useCallback, useEffect, useState } from "react";
import { GIFObject } from "../types";

interface UseFetchOptions {
  url: string;
  infiniteScroll?: boolean;
}

const useFetch = ({ url, infiniteScroll = true }: UseFetchOptions) => {
  const [data, setData] = useState<GIFObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);

  const fetchMore = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}&offset=${offset}`);
      const json = await response.json();
      
      if (json.meta.status >= 400) {
        setError(true);
        throw new Error('An error while fetching the data occurred!');
      }

      if (json.data) {
        setData(prevItems => [...prevItems, ...json.data]);
      }

    } catch (error) {
      setError(true);
      throw new Error('An error while fetching the data occurred!');
    } finally {
      setLoading(false);
    }
  }, [offset, url]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }

    setOffset((prev) => prev + 40);
    fetchMore();
  }, [fetchMore, loading]);

  useEffect(() => {
    fetchMore();
  }, [fetchMore]);

  useEffect(() => {
    if (infiniteScroll) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [infiniteScroll, handleScroll]);

  return { loading, error, data };
};

export default useFetch;
