import './App.css'
import Features from './Components/Features'
import Heading from './Components/Heading'
import NavBar from './Components/NavBar'

function App() { 

  return (
    <div className="App pt-5">
      <NavBar/>
      <Heading />
      <Features />
    </div>
  )
}

export default App
