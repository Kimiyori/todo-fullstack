import { useEffect, useState } from 'react';

const useError = (timeout: number = 2000) => {
  const [error, setError] = useState('');

  useEffect(() => {
    error && setTimeout(() => setError(''), timeout);
  }, [error, timeout]);
  return { error, setError };
};
export default useError;

