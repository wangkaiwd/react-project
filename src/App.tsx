import React, { useEffect, useState } from 'react';
import useRequest from '@/http/useRequest';
import { fetchDemo } from '@/api';
import { Button } from 'antd-mobile';

interface Props {

}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Button size={'small'} type={'primary'}>
        click
      </Button>
    </div>
  );
};

export default App;
