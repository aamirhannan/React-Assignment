import './App.css'
import CardContainer from './Components/CardContainer'
import Deal from './Components/Deal'
import Imagecarousel from './Components/Imagecarousel'
import Navbar from './Components/Navbar'
import Offertag from './Components/Offertag'
import TopBar from './Components/TopBar'

function App() {

  return (
    <div className='container'>
     <TopBar/>
     <Navbar/>
     <Imagecarousel/>
     <Offertag/>
     <CardContainer/>
     <Deal/>
    </div>
  )
}

export default App
