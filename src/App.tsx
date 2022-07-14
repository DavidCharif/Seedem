import './App.css'
import CallToAction from './Components/CallToAction'
import Features from './Components/Features'
import Heading from './Components/Heading'
import NavBar from './Components/NavBar'

function App() { 

  return (
    <div className="App pt-5">
      <NavBar/>
      <Heading />
      <Features />
      <CallToAction />
    </div>
  )
}

export default App
