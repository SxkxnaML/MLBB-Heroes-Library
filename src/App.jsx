import './App.css'
import Header from './components/Header/Header.jsx'
import HeroForm from './components/HeroSearch/HeroSearch.jsx'
import HeroList from './components/HeroList/HeroList.jsx'
import heroes from './data/heroes.mock'
import { useState } from 'react'

function App() {
  const [inputData, setInputData] = useState('')

  const normalString = inputData.trim().toLowerCase()

  const filteredHeroArray = heroes.filter((el) =>
    el.name.toLowerCase().includes(normalString),
  )

  return (
    <div className="main">
      <Header />
      <HeroForm value={inputData} setInputData={setInputData} />
      <HeroList heroes={filteredHeroArray} />
    </div>
  )
}

export default App
