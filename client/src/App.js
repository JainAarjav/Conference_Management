import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';
import Conferences from './Pages/Conferences';

import { Toaster } from 'react-hot-toast';
import RegisteredConf from './Pages/RegisteredConf';



function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="dash" element={<Dashboard/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path='conf/:id' element={<Conferences/>}/>
          <Route path='reg_conf' element={<RegisteredConf/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
