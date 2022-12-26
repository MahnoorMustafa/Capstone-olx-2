
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Articleinfo from './components/Article/Articleinfo';
import Products from './components/Products';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import Category from './components/Category';
import Sell_form from './components/Sell_form' ;
import LoginForm from './components/LoginForm' ;


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route path = "/" element={
    <div>
    <Navbar/>
    <Category/>
    <Products/>
    <Footer/>
    
    </div>
  }/>
  <Route path = "/Sell_form" element={
    <div>
    <Sell_form/>
    </div>
  }/>
  <Route path = "/LoginForm" element={
    <div>
    <LoginForm/>
    </div>
  }/>
  <Route path = "/:category" element={
    <div>
    <Navbar/>
    <Category/>
    <Articles/>
    <Footer/>
    
    </div>
  }/>
  <Route path = "/Articleinfo/:id" element={
    <div>
    <Navbar/>
    <Category/>
    <Articleinfo/>
    <Footer/>
    
    </div>
  }/>

  </Routes>
  
  </BrowserRouter> 
  </div>
  );
}

export default App;
