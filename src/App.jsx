import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NavBar from './components/navbar'
import { Grid } from '@mui/material'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}>
      </Route>
      <Route path='/about-us' element={<AboutPage></AboutPage>}>
      </Route>
      <Route path='/contact' element={<ContactPage></ContactPage>}>
      </Route>
    </Routes>
   
      
    </>
  )
}

export default App
