import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';

function App(props){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
