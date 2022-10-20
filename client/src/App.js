import React from 'react';
import User from './Routes/User';
import Admin from './Routes/Admin';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<User />} path='/*' />
      </Routes>
      <Routes>
        <Route element={<Admin />} path='/admin/*' />
      </Routes>
    </div>
  );
}

export default App;
