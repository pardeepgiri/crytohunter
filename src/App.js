import React from 'react'
import './component/style.css';
import {Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import List from './component/List';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<List/>}></Route>

      </Routes>
    </div>
  )
}

export default App;
