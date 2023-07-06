import logo from './logo.svg';
import './App.css';
import Products from './Product/product';
import Login from './Login';
import Navigationbar from './Navigation/navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails/productdetails';

function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
