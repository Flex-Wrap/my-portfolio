import { Link } from 'react-router-dom'
import LinkBox from './LinkBox'
import BurgerMenu from './BurgerMenu'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="portfolio-link"><h2>PORTFOLIO.</h2></Link>
      <ul className="nav-links">
        <li>
          <LinkBox text="Copenhagen Fashion Week" to="/cphfw" color="orange" />
        </li>
        <li>
          <LinkBox text="Botanical Garden" to="/botanical-garden" color="green" />
        </li>
        <li>
          <LinkBox text="Natural History Museum" to="/nhm" color="#8B7355" />
        </li>
      </ul>
      <BurgerMenu>
        <ul className="mobile-nav-links">
          <li>
            <LinkBox text="Copenhagen Fashion Week" to="/cphfw" color="orange" />
          </li>
          <li>
            <LinkBox text="Botanical Garden" to="/botanical-garden" color="green" />
          </li>
          <li>
            <LinkBox text="Natural History Museum" to="/nhm" color="#8B7355" />
          </li>
        </ul>
      </BurgerMenu>
    </nav>
  )
}

export default Navbar
