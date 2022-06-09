// import Swiper from 'swiper'
import 'swiper/css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss'

import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import WebRoutes from './config/WebRoutes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WebRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
