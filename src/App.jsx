import {Route,HashRouter,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import ProductDetail from './Pages/ProductDetail'
function App(){
  return(
    <>
    <HashRouter>
    <Header/>
  <Routes>
 <Route index  element={<Home/>}></Route>
    <Route path='/home'  element={<Home/>}></Route>
    <Route path='/about'  element={<About/>}></Route>
    <Route path='/contact'  element={<Contact/>}></Route>
    <Route path='/shop'  element={<Shop/>}></Route>
    <Route path='/shop/:id' element={<ProductDetail/>} />
  </Routes>
  <Footer/>
    </HashRouter>
    

    </>
  )
}
export default App