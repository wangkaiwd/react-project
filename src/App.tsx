import React, { useEffect, useState } from 'react';
import useRequest from '@/http/useRequest';
import { fetchDemo } from '@/api';
import { Button } from 'antd-mobile';

interface Props {

}

// 一个真实的业务场景：
//    稍微复杂一些： 可编辑表格，当表格内容编辑的时候，我们要更改原来请求到的数据

const App: React.FC<Props> = () => {
  const [{ isLoading, data, error }] = useRequest(fetchDemo);
  const [{ isLoading: isLoading1, data: data1, error: error1 }, changeDoFetch] = useRequest(fetchDemo, {}, 'manual');
  useEffect(() => {
    console.log('data1', data1);
  }, [data1]);
  return (
    <div>
      <Button size={'small'} type={'primary'} onClick={() => {
        console.log('click');
        changeDoFetch();
      }}>
        click
      </Button>
    </div>
  );
};

export default App;
