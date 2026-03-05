import './App.css'
import Header from './components/Header/Header.jsx'
import HeroSearch from './components/HeroSearch/HeroSearch.jsx'
import HeroList from './components/HeroList/HeroList.jsx'
import heroes from './data/heroes.mock'
import { useState } from 'react'

function App() {
  const [searchHero, setSearchHero] = useState('')

  const [selectRole, setSelectRole] = useState('All')

  const normalString = searchHero.trim().toLowerCase()

  const filteredHeroArray = heroes.filter((el) => {
    const matchName = el.name.toLowerCase().includes(normalString)
    const matchRole = selectRole === 'All' || el.role.includes(selectRole)
    return matchName && matchRole
  })

  return (
    <div className="main">
      <Header />
      <HeroSearch
        value={searchHero}
        setSearchHero={setSearchHero}
        heroRole={selectRole}
        setSelectRole={setSelectRole}
      />
      <HeroList heroes={filteredHeroArray} />
    </div>
  )
}

export default App
