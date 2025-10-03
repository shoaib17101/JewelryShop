import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
function App(){
  return(
    <>
    <Header/>
  <BrowserRouter>
  <Routes>
    <Route index  element={<Home/>}></Route>
    <Route path='/home'  element={<Home/>}></Route>

  </Routes>
  </BrowserRouter>

    </>
  )
}
export default App