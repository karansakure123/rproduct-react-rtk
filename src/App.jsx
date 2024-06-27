import React from 'react'
import Redux from './Redux/Redux'
import  ToggleSwitch  from './togle/Toggle'
import Home from './pages/Home'
import Cart from './pages/Cart'
import "./App.css"
import Nav from './Redux/Nav'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Products from './Redux/Products'
import {Provider} from "react-redux"
import store from "./store/store"

const App = () => {
  return (
 <>
 
 {/* <Redux /> */}
 {/* <ToggleSwitch/> */}

<Provider store={store}>


<Router >
  <Nav/>
  <Routes>
    <Route path='/' element={<Products/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/products' element={<Products/>}></Route>

  </Routes>
</Router>
</Provider>

  </>
 
  )
}

export default App