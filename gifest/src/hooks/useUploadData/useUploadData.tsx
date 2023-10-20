import { useState } from 'react';

interface UseUploadDataOptions {
  url: string;
}

interface UploadDataOptions {
  body: FormData;
  onUploadCallback?: (postedDataId: string) => void;
}

const useUploadData = ({ url }: UseUploadDataOptions) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const uploadData = async({
    body,
    onUploadCallback
  }: UploadDataOptions) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(false);

      const response = await fetch(url, {
        method: 'POST',
        body,
      });
      const json = await response.json();

      if (response.status === 200) {
        if (onUploadCallback) {
          console.log('here hook')
          
          onUploadCallback(json.data.id);
        }
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, success, uploadData };
};

export default useUploadData;
