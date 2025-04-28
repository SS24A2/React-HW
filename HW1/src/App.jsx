import Card from './components/Card'
import Intro from './components/Intro'
import Nav from './components/Nav'
import './style.css'

export default function App() {
  return (
    <div className="container">
      <Intro />
      <Nav />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
