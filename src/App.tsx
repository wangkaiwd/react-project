import React, { useEffect, useState } from 'react';
import useRequest from '@/http/useRequest';
import { fetchDemo } from '@/api';

interface Props {

}

const App: React.FC<Props> = () => {
  const [{ isLoading, data, error }] = useRequest(fetchDemo);
  const [{ isLoading: isLoading1, data: data1, error: error1 }, changeDoFetch] = useRequest(fetchDemo, {}, 'manual');
  useEffect(() => {
    console.log('data1', data1);
  }, [data1]);
  return (
    <div>
      {
        isLoading ? 'loading' : undefined
      }
      <button onClick={() => {
        console.log('click');
        changeDoFetch();
      }}>
        click
      </button>
      <div>
        {
          isLoading1 ? <h3>loading...</h3> : <h1>加载完成</h1>
        }
      </div>
    </div>
  );
};

export default App;
