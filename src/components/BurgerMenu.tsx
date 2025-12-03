import { useState } from 'react'
import './BurgerMenu.css'

interface BurgerMenuProps {
  children: React.ReactNode
}

function BurgerMenu({ children }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="burger-menu">
      <button
        className={`burger-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="burger-lines">
          <span className="burger-line line1"></span>
          <span className="burger-line line2"></span>
          <span className="burger-line line3"></span>
        </div>
      </button>
      {isOpen && <div className="menu-overlay">{children}</div>}
    </div>
  )
}

export default BurgerMenu
