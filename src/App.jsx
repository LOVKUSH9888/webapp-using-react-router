import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Posts from './pages/Posts.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Error from './pages/Error.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/:productsId" element={<SingleProduct/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
