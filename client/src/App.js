import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as ROUTES from './routes';

import Login from './pages/Login';
import PrivateRoute from './components/organisms/PrivateRoute';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Register from './pages/Register';
import Element from './pages/Element';
import ResetPassword from './pages/ResetPassword';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME} element={<PrivateRoute />} >
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
        <Route path='/element' element={<PrivateRoute />} >
          <Route path='/element' element={<Element />} />
        </Route>
        <Route path='/upload' element={<PrivateRoute />} >
          <Route exact strict path='/upload' element={<Upload />} />
        </Route>
        <Route path="/recoverpassword" element={<ResetPassword />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
