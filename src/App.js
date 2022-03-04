import { useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
  <div className = "app">
    <BrowserRouter>
  <NavBar title = "PhoneStore"/>
  <Routes>
    <Route path = '/home' element = {<NavBar/>}/>
  <Route path = '/' element = {<ItemListContainer/>} />
  <Route path = '/category/:categoryId' element = {<ItemListContainer/>} />
  <Route path = '/detail/:productoId' element = {<ItemDetailContainer/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
