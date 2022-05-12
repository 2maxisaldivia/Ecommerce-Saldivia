import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer nombre={"Lomo simple"} precio={1500} descripcion={"Tomate, lechuga, huevo, bacon"} />
    </>
  );
}

export default App;
