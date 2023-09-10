import heroimg from '../../assets/hero-img.png'
import brush from '../../assets/brush-touch.png'
import approachImg  from '../../assets/approach-img.png'
import card1  from '../../assets/card-1.png'
import card2  from '../../assets/card-2.png'
import card3  from '../../assets/card-3.png'
import card4  from '../../assets/card-4.png'
import star from '../../assets/Star.png'
import quote from '../../assets/quote.png'
import { Workflow } from './Workflow'
import { Cards } from './Cards'
import { Services } from './Services'
import { Stats } from './Stats'


function Hero() {
  return (<>
    <section className="container main">
      <div className="main-content">

      </div>
      <div className="information grid  ">
        <div className="statistics grid grid-row  grid-gap">
          <div className="info-img">
            <img src={heroimg} alt="" className="hero-img" />
          </div>
          <div className='flex flex-col jc-sb'>
          <Stats num ='05' sign='+' info='Years Of Experience'/>
          <Stats num ='60' sign='+' info='Design Awards'/>
          <Stats num ='97' sign='%' info='Client Satisfaction'/>
          </div>
        </div>
      </div>
    </section>
    <article className="article  container-inner">
      <p className='article-text special'>We looked at yesterday’s world and changed the rules of the game a bit.</p>
      <img src={brush} alt="" className="brush" />
    </article>
    <section className="approach container-inner">
      <h2 className='approach-heading sub-heading'>our  <span className='orange'>approach</span> is to solve problem</h2>
      <div className="grid grid-col-2 approach-contain">
        
        <article className="approach-info">
          <p className='text mb-regular'>
            Located in Lagos, we are a professional creative design agency that has done many projects with various clients  across the world.
          </p>
          <p className='text mb-regular'>
            We are a team of creative people who are committed to giving the world a little touch of beauty with our designs. We love what we do and we do it with passions. We believe in using business to drive positive changes in the world & never setting for what worked in the past.
          </p>
           <button href="#" className=" btn flex ai-c jc-c mb-regular">learn more</button>
        </article>
        <img src={approachImg} alt="" className="approach-img" />
      </div>
    </section>
    <section className="services container-inner">
      <h2 className="service-heading sub-heading">
        <span className='orange'>services</span> we provide
      </h2>
    <p className='service-text text'>
      Design services We are providing. With best-in-class design and engineering, our work maximizes value by putting your customers at the center of everything we do.
      </p>
      <Services title= 'Graphic Design'/>
      <Services title= 'UI/UX design'/>
      <Services title= 'Illustrations'/>
      <Services title= 'Logo & Branding'/>
      <Services title= 'Logo & Branding'/>
      
    </section>
    <section className="projects container-inner">
      <h2 className="sub-heading projects-heading">our latest <span className="orange">projects </span></h2>
      <div className="grid grid-col-2 grid-gap">

       <Cards title='Email Marketing Landing Page' cardImg={ card1} />
    <Cards title='Marketer portfolio landing page' cardImg={ card2} />
    <Cards title='Agency Landing Page Design' cardImg={ card3} />
      <Cards title='Developer portfolio landing page' cardImg={card4} />
      </div>
      <div className="flex ai-c jc-c">
        <button href="#" className="projects-btn btn flex ai-c jc-c">View all projects</button>
      </div>
    </section>
    <section className="workflow container-inner">
      <h2 className="workflow-heading sub-heading">our <span className="orange">customized</span> workflow</h2>
      <div className="workflow-content">
        <div className="workflow-steps grid grid-col-2 grid-gap">
          <Workflow num='1' title='Discussion' desc='We start by learn and research based on client brief and resource to gain about the needs, goals, product and requirements. We are providing the best.' />
          <Workflow num='2' title='Discovery' desc='We start by learn and research based on client brief and resource to gain about the needs, goals, product and requirements. We are providing the best.' />
          <Workflow num='3' title='Strategy' desc='We start by learn and research based on client brief and resource to gain about the needs, goals, product and requirements. We are providing the best.' />
          <Workflow num='4' title='Design & Dev' desc='We start by learn and research based on client brief and resource to gain about the needs, goals, product and requirements. We are providing the best.' />
        </div>

      </div>
    </section>
    <div className="slider">
      <div className="top flex">
        <span className='slider-text'>landing page</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>web design</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>production design</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>copy writing</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>Digital Marketing</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>development</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>animation</span>
        <span><img src={star} alt="" className="star" /></span>
      </div>
      <div className=" left flex">
        <span className='slider-text'>copy writing</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>Digital Marketing</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>development</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>animation</span>
        <span><img src={star} alt="" className="star" /></span>
         <span className='slider-text'>landing page</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>web design</span>
        <span><img src={star} alt="" className="star" /></span>
        <span className='slider-text'>production design</span>
        <span><img src={star} alt="" className="star" /></span>
      </div>
    </div>
    <article className="article container-inner">
      <div className="quote flex flex-col">
        <img src={quote} alt="" className="radio quote-img" />
        <div>

        <p className="article-text">
          Route agency team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!
        </p>
          <div className="quote-wrapper">
            <div className="name">
              <p>
              Elizabeth
              </p>
              <small>Los Angeles, CA</small>
            
            </div>
              <div className="flex ai-c dots">
                <div className="dot"></div>
                <div className="dot "></div>
                <div className="dot active"></div>
                <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>

      </div>
    </article>
  </>
  )
}


export default Hero
