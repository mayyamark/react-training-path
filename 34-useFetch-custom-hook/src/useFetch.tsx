import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | any[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    fetch(url, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
