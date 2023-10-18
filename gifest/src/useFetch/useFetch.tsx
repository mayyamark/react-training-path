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
      setError(false);
      const response = await fetch(`${url}&offset=${offset}`);
      const data = await response.json();
  
      setData(prevItems => [...prevItems, ...data.data]);
    } catch (error) {
      setError(true);
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
