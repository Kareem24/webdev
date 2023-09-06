import arrow from '../../assets/uparrow.png'
import logo from '../../assets/Logo.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container-inner">
        <div className="footer-heading grid grid-gap ">
          <h2 className="sub-heading">let’s make your <span className="orange">product </span> together</h2>
          <img src={arrow} alt="" className="up-arrows radio" />

        </div>
        <div className="footer-info grid grid-col-2 grid-gap">
          <div className="logo-info">
            <div className='flex ai-c logo-div'>
              <img src={logo} alt="" className="logo" />
              <span className='dash'></span>
              <p>the creative agency</p>
            </div>
            <p className="small-heading">follow Us</p>

            <div className="social-links flex ai-c">
              <Social img ={facebook} />
              <Social img ={linkedin} />
              <Social img ={twitter} />
              <Social img ={instagram} />

            </div>

          </div>
          <div className="links-info grid grid-col-3">
            <div className="about">
              <p className='small-heading'>About</p>
               <small className='footer-link'>Home</small>
              <small className='footer-link'>About us</small>
              <small className='footer-link'>Service</small>
              <small className='footer-link'>Projects</small>
            </div>
            <div className="support">
              <p className="small-heading">Support</p>
              <small className='footer-link'>Blog</small>
              <small className='footer-link'>Contact</small>
              <small className='footer-link'>Menu</small>
            </div>
            <div className="join">
              <p className="small-heading">Join Community</p>
              <small className='footer-link'>Community@agency.com</small>
            </div>

          </div>
        </div>
        <div className="line"></div>
        <p className='copyright'>Copyright 2023 all rights Flowgiri reserved</p>
      </div>
      
   </footer>
  )
}
function Social({img}) {
  return <>
    <div className="img-div flex ai-c ">
      <img src={img} alt="facebook logo" />
   </div>
  </>
}
export default Footer
