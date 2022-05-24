// @ts-check
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import CartContextHOC from './components/context/CartContextHOC';

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
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </CartContextHOC>

    {/* <ItemDetailContainer /> */}
    {/* Comento esto de forma provisional para luego incuirlo */}
    {/* <Container maxWidth="x1">
      <ItemListContainer  />
    </Container> */}


  
    </>
  );
}

export default App;
