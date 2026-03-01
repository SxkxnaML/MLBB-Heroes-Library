import './App.css'
import Header from './components/Header'
import HeroCard from './components/HeroCard'
import heroes from './data/data'

function App() {
  return (
    <div className="main">
      <Header />
      {heroes.map((el) => (
        <HeroCard hero={el} key={el.id} />
      ))}
    </div>
  )
}

export default App
