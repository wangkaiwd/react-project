import React, { useEffect, useState } from 'react';
import axios from '@/http/axiosConfig';

interface Params {
  [key: string]: any
}

type RequestFunc = (params?: Params) => Promise<ApiProps>

interface Request {
  get (url: string): RequestFunc;

  post: (url: string) => RequestFunc;
}

interface ApiProps {
  code: number;
  data: Params;
  msg: string;
}

const useRequest = (api: RequestFunc, params?: Params) => {
  const [data, setData] = useState<Params>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    api(params).then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch(error => {
      setError(error);
      setIsLoading(false);
    });
  }, []);
  return [isLoading, data, error];
};

export const request: Request = {
  get (url) {
    return (params) => {
      return axios.get(url, { params });
    };
  },
  post (url) {
    return (params) => {
      return axios.post(url, params);
    };
  }
};

export default useRequest;
