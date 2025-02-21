import React from 'react'
import { Link } from 'react-router-dom';
import '../style/main.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-wrap'>
            <ul className='leftNav'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/Gg'>골든글러브</Link></li>
                <li><Link to='/Brand'>브랜드</Link></li>
            </ul>
            <div className='logo'></div>
            <ul className='rightNav'>
                <li><Link to='/Player'>선수단</Link></li>
                <li><Link to='/Rank'>순위</Link></li>
                <li><Link to='/Product'>상품</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav