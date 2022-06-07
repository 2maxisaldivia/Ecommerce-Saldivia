// @ts-check
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart/Cart';
import CartContextHOC from './components/context/CartContextHOC';
import Checkout from './components/Checkout';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <>
   
    <CartContextHOC>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </CartContextHOC>

  
    </>
  );
}

export default App;
