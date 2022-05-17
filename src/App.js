import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount';
import { Container } from '@mui/material';
import Loading from './components/Loading/Loading';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <>
    <NavBar />
    <ItemDetailContainer />
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
