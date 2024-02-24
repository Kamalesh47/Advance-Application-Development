import React, { useState } from 'react'
import "../assets/css/Home.css"
import homeimg from "../assets/images/homeimg1.jpg" 
import celimg1 from "../assets/images/cel-1.jpg"
import celimg2 from "../assets/images/cel-2.jpg"
import act2 from "../assets/images/djshow.jpg"
import act3 from "../assets/images/danceshow.jpg"
import Navbar from '../components/Navbar'
import act4 from "../assets/images/gameshow.jpg"
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const[flag,setFlag]=useState(false)
  const[flag1,setFlag1]=useState(false)
  const[flag2,setFlag2]=useState(false)
  return (
    <>
    <Navbar/>
    <div>
    <div className='homeBody'>
    <img src={homeimg}/>
    <div className='home-conatiner'>
    <h1>We Make you celebrate</h1>
    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lets book your own party slots</h2>
    <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Spend your celebrate mood with us</h2>
    <div className="home-button">
    <button style={{marginRight:"2cm",border:"none",color:"white"}}>Book Slot</button>
    </div>
    </div>
    </div>
    </div>
    <div className='home-container2'>
    <h1>Services</h1>
    <div className='display-container'>
    <div className='sub-container1'>
    <h1>Dance</h1>
    <div className='sub-container2'>
    {flag?<div style={{color:"white"}}>So six weeks prior to the party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the party Four weeks prior to the partyFour weeks prior to the party -  party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the part</div>:<div><img src={act2}/></div>}
    <button onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(false)}>View More</button>
    </div>
    </div>
    
    <div className='sub-container1'>
    <h1>Music</h1>
    <div className='sub-container2'>
    {flag1?<div style={{color:"white"}}>party, we sit with the parents and children and help them decide the theme. and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the party  party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the part</div>:<div><img src={act3}/></div>}
    <button onMouseEnter={()=>setFlag1(true)} onMouseLeave={()=>setFlag1(false)}>View More</button>
    </div>
    </div>
    <div className='sub-container1'>
    <h1>Fun Games</h1>
    <div className='sub-container2'>
    {flag2?<div style={{color:"white"}}>Four weeks prior to the partyFour weeks prior to the party  and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the party Four weeks prior to the partyFour weeks prior to the party -  party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the part</div>:<div><img src={act4}/></div>}
    <button onMouseEnter={()=>setFlag2(true)} onMouseLeave={()=>setFlag2(false)}>View More</button>
    <h2>
  
    </h2>
    </div>
    </div>
    
    </div>
    </div>
    <div className='home-container3'>
    <div className='sub-container3'>
      <p style={{fontSize:"0.6cm",padding:"1cm",fontStyle:"italic"}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"Birthday Bumps will take care of your little 
      one’s birthday party. We’re your party planners, while we fret around with making your child's birthday a mega event, there are just a few things that we need from your side. To make the party stay in everyone’s heart for a long time, here is how we would plan it out:

      Six weeks before the party - To get the entire venue decorated as per 
      the birthday theme needs some pre-planning. So six weeks prior to the party, we sit with the parents and children and help them decide the theme. At this time we finalize the party venue based on the theme and number of guests you will be inviting.
      
      Four weeks prior to the party - These days birthday party invitation cards are an exquisite set of creativity. Handmade, or made by the best craft artists based on the party theme we'll have them done. Based on the theme, guest age and the birthday child's favorite games, we’ll chart out the whole activity schedule. This is the best time to place the order for the cake, often children want fancy cakes that are again based on their 
      preferences and it makes all sense to inform the cake maker well in advance"</p>
    <img src={celimg2}></img>
    </div>
    <div className='sub-container4'>
    <p style={{fontSize:"0.6cm",padding:"1cm",fontStyle:"italic"}}>"Three weeks to go for the party - Although invitations have been sent to all parents almost a week ago, in case if the child loses the card, it is better to mail them informing about the party. For the tiny tots, we do provide extra help on request.

    One and Two weeks before the party – From the period of 14 days until the birthday party, we are constantly in contact with the parents. The flow of the party is decided, guests who haven’t confirmed are called again. Our event managers' discus the comprehensive event, the menu is rechecked, we confirm with the bakers the cake designs and start our decoration preparations.
    pre-planning. So six weeks prior to the party, we sit with the parents and children and
    One or two days before the party - We again recheck with the caterers, bakers, party venue and see that the ambience is decorated based as you wanted.
    pre-planning. So six weeks prior to the party, we sit with the parents and children and
    On the day of the party, everything will be perfectly organized, the way your child wanted and the only thing that parents have to do is sit back and relax and take part in the activities".</p>
    <img src={celimg1}></img>
    </div>
    </div>
    <div class="mfooter">
        <div class="heading">
          <h2>BIO<sup></sup></h2>
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="#">Cakes</a></p>
            <p><a href="#">Party Hall</a></p>
            <p><a href="#">Food</a></p>
            <p><a href="#">Activity</a></p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/SimpleLearn"
              ><i class="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="https://www.twitter.com"
              ><i class="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com"
              ><i class="fab fa-github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com"
              ><i class="fab fa-facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com"
              ><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="/About">About</a></p>
            <p><a href="/Help">Help</a></p>
            <p><a href="/Contact">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              10th,vivekanadhar street ,Main Road  <br />
              Town hall, CBE.
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-9468769563<br></br>
              +91-0486534566</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">kidsparty@gmail.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 kidsparty.
          </footer>
        </div>
      </div>
    </>
  )
}
