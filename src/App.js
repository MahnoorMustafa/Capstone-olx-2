
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Articleinfo from './components/Article/Articleinfo';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Cards from './components/Cards';
import Cardslider from './components/Cardslider';
import Form from './components/Form';
import FormOfSell from './components/FormOfSell';


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
  <Route path = "/" element={
    <div>
    <Navbar/>
    <Categories/>
    <Cards/>
    <Footer/>
    
    </div>
  }/>
  <Route path = "/FormOfSell" element={
    <div>
    <FormOfSell/>
    </div>
  }/>
  <Route path = "/Form" element={
    <div>
    <Form/>
    </div>
  }/>
  <Route path = "/:category" element={
    <div>
    <Navbar/>
    <Categories/>
    <Cardslider/>
    <Footer/>
    
    </div>
  }/>
  <Route path = "/Articleinfo/:id" element={
    <div>
    <Navbar/>
    <Categories/>
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
