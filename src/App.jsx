import {Route,HashRouter,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Test from './Components/Test'
function App(){
  return(
    <>
    <HashRouter>
    <Header/>
  <Routes>
 <Route index  element={<Home/>}></Route>
    <Route path='/home'  element={<Home/>}></Route>
    <Route path='/about'  element={<About/>}></Route>
  </Routes>
  <Footer/>
    </HashRouter>
    

    </>
  )
}
export default App