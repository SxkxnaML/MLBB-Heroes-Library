import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx'
import Header from './components/Header/Header.jsx'
import HeroPage from './pages/HeroPage/HeroPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
