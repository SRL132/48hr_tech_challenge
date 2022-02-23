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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path='/element' element={<Element />} />

        <Route path={ROUTES.UPLOAD} element={<PrivateRoute />} >
          <Route exact strict path={ROUTES.UPLOAD} element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
