import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Address } from '../interfaces/address';
import { emptyAdres } from '../utils/address';

axios.defaults.baseURL = 'https://viacep.com.br/ws/';

function useFetch(axiosParams: AxiosRequestConfig) {
  const [response, setResponse] = useState<Address>(emptyAdres);
  const [error, setError] = useState<AxiosError | null>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.request(params);
      if (data.erro) {
        setError(data);
      }
      setResponse(data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!axiosParams.url) return;
    fetchData(axiosParams);
  }, [axiosParams]);

  return { response, loading, error };
}

export default useFetch;
