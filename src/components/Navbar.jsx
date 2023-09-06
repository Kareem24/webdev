import logo from '../assets/Logo.png'
import hamburger from '../assets/menu.png'
import mail from '../assets/message.png'

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
          <p className='close'>X</p>
        </ul>
        <div className="message-mail d-none ">
          <img src={mail} alt="message icon" className="mail-icon" />
          <span>hello@gmail.com</span>
        </div>
        <img src={hamburger} alt="hamburger menu" className="menu" />
      </nav>
    </header>
  )
}

export default Navbar
