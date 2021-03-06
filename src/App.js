
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Checkout from './Component/Checkout/Checkout';
import Footer from './Component/Footer/Footer';

import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import Signup from './Component/Login/Signup/Signup';
import NotFound from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequirAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout/:id' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
