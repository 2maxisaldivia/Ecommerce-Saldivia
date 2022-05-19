import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount';
import { Container } from '@mui/material';
import Loading from './components/Loading/Loading';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<h1>ERROR 404: NOT FOUND</h1> }/>
      </Routes>
    </BrowserRouter>
    
    {/* <ItemDetailContainer /> */}
    {/* Comento esto de forma provisional para luego incuirlo */}
    {/* <Container maxWidth="x1">
      <ItemListContainer  />
    </Container> */}
    
    {/*Provisionalmente dejo esto por aca */}
    <ItemCount stock={5} initial={0}/>

  
    </>
  );
}

export default App;
