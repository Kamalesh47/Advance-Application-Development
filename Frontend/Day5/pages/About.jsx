import React from 'react'
import "../assets/css/About.css"
import Navbar from '../components/Navbar'
import pic1 from "../assets/images/about1.jpg"
import pic2 from "../assets/images/about2.jpg"
import pic3 from "../assets/images/about3.jpg"
export default function About() {
    
  return (
    <div>
    <Navbar/>
    <div className='about-container1'>
    <div className='about-sub-container1'>
    <h1> &nbsp;The Mission</h1>
    <p>
    &nbsp;Birthday Bumps organizes parties for every budget, for children of every age with a 
    guarantee that not as single moment would be dull. We will be your partners in your child’s 
    birthday events making it an extraordinary event that would impress one and all.
    </p>
    <p>
    &nbsp;Being tech-savvy, we have an acute eye for looking up for the latest developments in the world 
    and infuse them into your parties to make it an avant-garde event. Birthday parties have a special
    importance in each child’s 
    life and we promise to make your child’s birthday party distinctive and unforgettable.
    </p>
    <img src={pic1}/>
    </div>
    </div>
    <div className='about-container2'>
    <div className='about-sub-container2'>
    <h1>
      Bachelor Birthday Bumps - Lets Celebrate!
    </h1>
    <p>
    Are you looking to celebrate your child’s birthday with loads of fun filled with memories? 
    Yet being short of time not able to organize it in a rock-star way? Since your child’s birthday comes only once a year, 
    it deserves all the pomp and merriment to make it an unforgettable day.
    </p>
    <img src={pic2}/>
    </div>
    <p>Each birthday party is a hub of innovative productive and enjoyable activities that deliver a striking experience to all the guests. Birthday Bumps is a dependable partner for directing your birthday event, with every aspect being planned well in advance and delivered with utmost perfection to make your child’s birthday an evergreen moment. Equal attention is given to every aspect, right from the decorations, entertainment to the food management. Our services include – finding the party venue, helping you select the party theme, venue decoration in-lieu with the theme, crafting attention-grabbing invitation cards, menu planning, organizing entertainment activities to name a few – you are left with no burden except enjoy the party.
</p><p>
    Organizing a kid's birthday bash is more of an art and Birthday Bumps blends in the right amount of creativity and inventiveness to make it an instant hit. A keen sense of timing, efficient organization planning and coordinating multiple facets of the event help us stand a notch above all others. After an intricate understanding of your basic ideas, we then start to work on your child’s birthday event and deliver results and exceed your expectations.
    </p><p>
    We believe that a birthday party is much more than a mill routine, each party has to have a unique element that each kid enjoys and remembers for a long time. With Birthday Bumps, we provide a plethora of activities for your boy and girl, and they are customized based on your needs. These activities include – balloon decoration and providing customized balloons, paintings on face, pottery, clay art, hair braiding and coloring, birthday props such as castles, slides and hoopla rings, stage artists and hosts, puppet shows, eatables, media including videographers, photographers and prop booths, customized cakes to delight every heart and fancy freebies such as T-shirts, caps and eye-masks to name a few.</p>
    </div>
    <div className="image-container">
    
    </div>
    <div class="mfooter" style={{marginTop:"-0.5cm"}}>
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
            <p><a href="#">kidsplay@gmail.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 kidsplay.
          </footer>
        </div>
      </div>
    </div>
  )
}
