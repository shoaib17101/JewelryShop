import {Route,BrowserRouter,Routes} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
function App(){
  return(
    <>
    <Header/>
  <Routes>
    <HashRouter>
 <Route index  element={<Home/>}></Route>
    <Route path='/home'  element={<Home/>}></Route>
    </HashRouter>
  </Routes>

    </>
  )
}
export default App