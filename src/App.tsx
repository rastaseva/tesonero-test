import React from 'react';
import { Navbar } from './components/Navbar';
import { MainBlock } from './components/MainBlock';

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className='container'>
        <MainBlock />
      </div>
    </>
  )
}

export default App;
