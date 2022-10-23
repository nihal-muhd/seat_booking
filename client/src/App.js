import React from 'react';
import User from './Routes/User';
import Admin from './Routes/Admin';
import { Routes, Route } from 'react-router-dom'
import { UserContext } from './Context/UserAuthContext';


function App() {
  return (
    <div className="App">
      <UserContext>
        <Routes>
          <Route element={<User />} path='/*' />
        </Routes>
      </UserContext>
      <Routes>
        <Route element={<Admin />} path='/admin/*' />
      </Routes>
    </div>
  );
}

export default App;
