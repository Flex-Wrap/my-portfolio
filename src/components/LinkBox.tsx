import { Link } from 'react-router-dom'
import './LinkBox.css'

interface LinkBoxProps {
  text: string
  to: string
  color?: string
}

function LinkBox({ text, to, color = 'black' }: LinkBoxProps) {
  return (
    <div className="link-box" style={{ '--line-color': color } as React.CSSProperties}>
      <Link to={to}>{text}</Link>
    </div>
  )
}

export default LinkBox
