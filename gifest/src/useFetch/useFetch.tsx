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

  const fetchMore = useCallback(async (formattedUrl: string) => {
    try {
      setLoading(true);

      const response = await fetch(formattedUrl);
      const json = await response.json();
      
      if (json.meta.status >= 400) {
        setError(true);
        throw new Error('An error while fetching the data occurred!');
      }

      if (json.data) {
        if (infiniteScroll) {
          setData(prevItems => [...prevItems, ...json.data]);
        } else {
          setData(json.data);
        }
      }

    } catch (error) {
      setError(true);
      throw new Error('An error while fetching the data occurred!');
    } finally {
      setLoading(false);
    }
  }, [infiniteScroll]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }

    const newOffset = offset + 50;
    setOffset(newOffset);
    fetchMore(`${url}&offset=${newOffset}`);
  }, [loading, offset, url, fetchMore]);

  useEffect(() => {
    fetchMore(url);
  }, [url, fetchMore]);

  useEffect(() => {
    if (infiniteScroll) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [infiniteScroll, handleScroll]);

  return { loading, error, data };
};

export default useFetch;
