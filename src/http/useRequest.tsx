import React, { useEffect, useMemo, useRef, useState } from 'react';
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

type Trigger = 'init' | 'manual'
// 常用的列表请求可以使用这个自定义hooks，但是当通过点击一个按钮来发送请求好像并不适用
const useRequest = (api: RequestFunc, params: Params = {}, trigger: Trigger = 'init') => {
  const [data, setData] = useState<Params>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // 可以手动控制发起请求的时机，默认为页面加载完成洪湖发起请求
  // 需要注意：这里不能使用函数，当为useState传入一个函数的时候，会懒加载初始的state
  // const [api, setApi] = useState<RequestFunc | undefined>(defaultApi);
  // const [apiUse, setApi] = useState<RequestFunc | undefined>(() => {
  //   return api;
  // });
  const [doFetch, setDoFetch] = useState(false);
  const isInitialMount = useRef(true);
  const dependence = useMemo(() => {
    return trigger === 'init' ? [] : [doFetch];
  }, [doFetch]);
  useEffect(() => {
    if (isInitialMount.current && trigger === 'manual') {
      isInitialMount.current = false;
    } else {
      setIsLoading(true);
      api(params).then(res => {
        setData(res.data);
        setIsLoading(false);
      }).catch(error => {
        setError(error);
        setIsLoading(false);
      });
    }
  }, dependence);
  const changeDoFetch = () => {
    setDoFetch(!doFetch);
  };
  return [{ isLoading, data, error }, changeDoFetch] as [any, any];
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
