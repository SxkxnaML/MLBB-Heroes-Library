import HeroSearch from '../../components/HeroSearch/HeroSearch.jsx'
import HeroList from '../../components/HeroList/HeroList.jsx'
import heroes from '../../data/heroes.mock'
import { useState } from 'react'

export default function HomePage() {
  const [searchHero, setSearchHero] = useState('')

  const [selectRole, setSelectRole] = useState('All')

  const normalString = searchHero.trim().toLowerCase()

  const filteredHeroArray = heroes.filter((el) => {
    const matchName = el.name.toLowerCase().includes(normalString)
    const matchRole = selectRole === 'All' || el.role.includes(selectRole)
    return matchName && matchRole
  })
  return (
    <>
     
      <HeroSearch
        value={searchHero}
        setSearchHero={setSearchHero}
        heroRole={selectRole}
        setSelectRole={setSelectRole}
      />
      <HeroList heroes={filteredHeroArray} />
    </>
  )
}
