import { Route, Routes } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import React from 'react';

const Display = () => {
  return (
    <div className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
      </Routes>
    </div>
  );
};

export default Display;
