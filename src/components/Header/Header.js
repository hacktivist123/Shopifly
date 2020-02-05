import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import {ReactComponent as Icon} from '../../assets/shop.svg'
const Header = () => (
  <div className='header'>
    <Link to= '/' className='logo-container'>
        <Icon className= 'logo'/>
    </Link>
    <div className='options'>
      <Link to= '/shop' className='option'>
          SHOP
      </Link>
      <Link to= '/contact' className='option'>
          CONTACT
      </Link>
      <Link to= '/signin' className='option'>
          SIGNIN
      </Link>
    </div>
  </div>
)
export default Header
