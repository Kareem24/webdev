import heroimg from '../../assets/hero-img.png'
import brush from '../../assets/brush-touch.png'
import approachImg  from '../../assets/approach-img.png'
import PropTypes from 'prop-types'


function Hero() {
  return (<>
    <section className="container main">
      <div className="main-content"></div>
      <div className="information grid">
        <div className="statistics grid grid-row">
          <div className="info-img">
            <img src={heroimg} alt="" className="hero-img" />
          </div>
          <Stats num ='05' sign='+' info='Years Of Experience'/>
          <Stats num ='60' sign='+' info='Design Awards'/>
          <Stats num ='97' sign='%' info='Client Satisfaction'/>
        </div>
      </div>
    </section>
    <article className="article container-inner">
      <p className='article-text'>We looked at yesterday’s world and changed the rules of the game a bit.</p>
      <img src={brush} alt="" className="brush" />
    </article>
    <section className="approach container-inner">
      <h2 className='approach-heading'>our  <span>approach</span> is to solve problem</h2>
      <div className="grid">
        <img src={approachImg} alt="" className="approach-img" />
        <article className="approach-info">
          <p>
            Located in Lagos, we are a professional creative design agency that has done many projects with various clients across the world.
          </p>
          <p>
            We are a team of creative people who are committed to giving the world a little touch of beauty with our designs. We love what we do and we do it with passions. We believe in using business to drive positive changes in the world & never setting for what worked in the past.
          </p>
        </article>
      </div>
    </section>
  </>
  )
}

function Stats({num, sign, info}) {
  return<div className="stats-info">
    <p className="number">{num}<span className="sign">{sign}</span></p>
          <p className="stats-text">{info}</p>
        </div>
}
Stats.propTypes = {
  num: PropTypes.string,
  sign: PropTypes.string,
  info:PropTypes.string
}


export default Hero
