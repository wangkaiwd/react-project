import React, { lazy, Suspense } from 'react';
// import ContextDemo from '@/ContextDemo';

const ContextDemo = lazy(() => import(/* webpackChunkName: "contextDemo" */'./ContextDemo'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <ContextDemo/>
      </Suspense>
    </div>
  );
};

export default App;
