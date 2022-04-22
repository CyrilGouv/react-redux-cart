import { useSelector } from "react-redux"

import './Navbar.css'


const Navbar = () => {
  const { amount } = useSelector(state => state.cart)

  return (
    <nav className='Navbar'>
        <div className="navbar__logo">Gerald Black</div>
        <div className="navbar__cart">Cart (<span className='navbar__cart__qty'>{ amount }</span>)</div>
    </nav>
  )
}

export default Navbar