import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, CPHFW, BotanicalGarden, NHM } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cphfw" element={<CPHFW />} />
        <Route path="/botanical-garden" element={<BotanicalGarden />} />
        <Route path="/nhm" element={<NHM />} />
      </Routes>
    </>
  )
}

export default App
