import {  } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Member from './pages/Member'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='member' element={<Member/>}/>
          </Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
