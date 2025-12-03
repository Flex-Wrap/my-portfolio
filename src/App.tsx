import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, CPHFW, BotanicalGarden, NHM } from './pages'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cphfw" element={<CPHFW />} />
          <Route path="/botanical-garden" element={<BotanicalGarden />} />
          <Route path="/nhm" element={<NHM />} />
        </Routes>
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </>
  )
}

export default App
