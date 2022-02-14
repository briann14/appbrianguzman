import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
  <div className = "app">
    
  <NavBar title = "PhoneStore"/>
  <ItemListContainer greeting = "Hola Mundo"/>
  
  </div>
  )
}

export default App;
