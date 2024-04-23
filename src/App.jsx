import Header from './assets/Components/Header'
import './App.css'

import Footer from './assets/Components/Footer'
import Delivery from './assets/Components/Delivery'
import TopPicks from './assets/Components/TopPicks'
import Ourfood from './assets/Components/Ourfood'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './assets/Components/Home'
import AboutUs from './assets/Components/AboutUs'
import Signin from './assets/Components/Signin'



function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/ourfood' element={<Ourfood />} />
          <Route path='/signin' element={<Signin/> } />
        
        </Routes>
        <Footer />
        </BrowserRouter>
        
    </>
  )
}

export default App
