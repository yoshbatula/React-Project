import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Navbar from './navbar.jsx'
import Food from './food.jsx'
function App() {
  return (
    <div>
        <Header></Header>
        <Food></Food>
        <Footer></Footer>
    </div>
  );
}

export default App
