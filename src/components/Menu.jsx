import React from 'react'
import meImg from '../images/fabio2.jpeg'
import {useNavigate, Link} from 'react-router-dom';

const Menu = () => {

    const [showMenu, setShowMenu] = React.useState(true);
    const handleClick = () => {
        if(!showMenu) {
            setShowMenu(true)}
        else {
            setShowMenu(false)}
    }

    const navigate = useNavigate()

    const handleClicka = (e) => {
        e.preventDefault()
        setShowMenu(true)
        navigate('/')
    }
    const handleClickb = (e) => {
        e.preventDefault()
        setShowMenu(true)
        navigate('/about')
    }
    const handleClickc = (e) => {
        e.preventDefault()
        setShowMenu(true)
        navigate('/portfolio')
    }
    const handleClickd = (e) => {
        e.preventDefault()
        setShowMenu(true)
        navigate('/contact')
    }


return (
    <header>
        {/* Menu btn */}
    <div className={!showMenu?'menu-btn close': 'menu-btn current'} onClick={handleClick}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
    </div>
    {/* menu */}
    <nav className={!showMenu?'menu show':'menu'}>
        {/* menu branding */}
        <div className={!showMenu?'menu-branding show':'menu-branding'}>
            <img src={meImg} alt="Fabio" className='portrait'/>
        </div>
        {/* menu nav */}
        <ul className={!showMenu?'menu-nav show':'menu-nav'}>
            {/* nav item  */}
            <li className={!showMenu?'nav-item current show':'nav-item current'}><Link to='/' className="nav-link" onClick={handleClicka}>HOME</Link></li>
            <li className={!showMenu?'nav-item show':'nav-item'}><Link to='/about' className="nav-link" onClick={handleClickb}>ABOUT ME</Link></li>
            <li className={!showMenu?'nav-item show':'nav-item'}><Link to='/portfolio' className="nav-link" onClick={handleClickc}>MY WORK</Link></li>
            <li className={!showMenu?'nav-item show':'nav-item'}><Link to='/contact' className="nav-link" onClick={handleClickd}>HOW TO REACH ME</Link></li>
        </ul>
    </nav>
</header>
  )
}

export default Menu
