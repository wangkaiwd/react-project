import React from 'react';
import useRequest from '@/http/useRequest';
import { fetchDemo } from '@/api';

interface Props {

}

const App: React.FC<Props> = () => {
  const [isLoading, data, error] = useRequest(fetchDemo);
  console.log('fetch', isLoading, data, error);
  return (
    <div>
      {
        isLoading ? 'loading' : undefined
      }
    </div>
  );
};

export default App;
