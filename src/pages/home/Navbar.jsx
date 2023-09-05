import logo from '../../assets/Logo.png'
import hamburger from '../../assets/menu.png'
const Navbar = () => {
  const links = ['about us', 'services','project','blog','contact']
  return (
    <header className='.header'>
      <nav className='navbar container flex ai-c jc-sb'>
        <img src={logo} alt="logo" className="logo" />
        <ul className='nav-links d-none'>
          {
            links.map((link,i) => <li key={i}>{ link}</li>)
          }
          <p>X</p>
        </ul>
        <img src={hamburger} alt="hamburger menu" className="menu" />
      </nav>
    </header>
  )
}

export default Navbar
