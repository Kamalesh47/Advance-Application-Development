import React, { useState } from 'react'
import "../assets/css/Service.css"
import cake1 from"../assets/images/cake1.jpg"
import cake2 from"../assets/images/cake2.jpg"
import cake3 from"../assets/images/cake3.jpg"
import cake4 from "../assets/images/cake4.jpg"
import food1 from "../assets/images/vegmeal.jpg"
import food2 from "../assets/images/nonvegmeal.jpg"
import act1 from "../assets/images/gameshow.jpg"
import act2 from "../assets/images/djshow.jpg"
import act3 from "../assets/images/danceshow.jpg"
import act4 from "../assets/images/magicshow.jpg"
import hall1 from "../assets/images/hall1.jpg"
import hall2 from "../assets/images/hall2.jpg"
import hall3 from "../assets/images/hall3.jpg"
import hall4 from "../assets/images/hall4.jpg"
import hall5 from "../assets/images/hall5.jpg"
import hall6 from "../assets/images/hall6.jpg"
import Navbar from '../components/Navbar'
import { Navigate, useNavigate } from 'react-router-dom';
import Bookingform from './Bookingform'
let index=0;
function Services() {

    const[hall,setHall]=useState("");
    const[food,setFood]=useState("");
    const[location,setLocation]=useState()
    const [activity,setActivity] = useState([]);
    const[cake,setCake]=useState();
    const[but,setbut]=useState(false)
    const[but1,setbut1]=useState(false)
    const[but2,setbut2]=useState(false)
    const[but3,setbut3]=useState(false)
    const[but4,setbut4]=useState(false)
    const[but5,setbut5]=useState(false)
    const[but6,setbut6]=useState(false)
    const[but7,setbut7]=useState(false)
    const[but8,setbut8]=useState(false)
    const[but9,setbut9]=useState(false)
    const[but10,setbut10]=useState(false)
    const[but11,setbut11]=useState(false)
    const[but12,setbut12]=useState(false)
    const[but13,setbut13]=useState(false)
    const[but14,setbut14]=useState(false)
    const[but15,setbut15]=useState(false)
    const[but16,setbut16]=useState(false)
    const navigate=useNavigate();


    const handleHall=(a)=>
    {
        setHall(a.name);
        localStorage.setItem('hall',hall)
        setLocation(a.Street+" "+a.City+" "+a.State+" "+a.Phonenumber+" "+a.Country)
        localStorage.setItem('location',location)
    }
    const handleCake=(a)=>
    {
        localStorage.setItem('cake',cake)
        setCake(a.name)
    }
    const handleNav=()=>
    {
        navigate("/booking")
        localStorage.setItem('activity',newList)
        console.log(cake+" "+hall+" "+food+" "+activity+" "+location);
        console.log(data);
        
    }
    const handleFood=(a)=>
    {
        setFood(a.name);
        localStorage.setItem('food',food)
    }
    const handleActivity=(a)=>
    {
        console.log(a.name)
        const newList=activity.concat(a.name)
        setActivity(newList)
       
    }
   
   
  return (
    <div>
    <Navbar/>
    <div className='title-heading'>
    <h1>Cakes</h1>
    </div>
    <div className='cake-container'>
    <div className='cake-sub-container'>
    <img src={cake1}/>
    <h1>Multi-layer Cake</h1>
    <p>Looking for some eye-catching and mouth-watering birthday cakes for your child’s birthday? 
    Too many options out there ending up in a confusion? Here is Birthday Bumps,
     your event planners who’ll arrange it for you. If there are any options from your side</p>
     <button onClick={()=>handleCake({name:"Multi-layer cake"},setbut14(false))}>{but14?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-240</div>}</button>
    </div>
    <div className='cake-sub-container' style={{marginLeft:"2cm"}}>
    <img src={cake2}/>
    <h1>Icecream Cake</h1>
    <p>Birthday Bumps specialize in cakes for birthday parties. We have a range of lip-smacking 
    cakes to please all your little guests. Either choose from our exquisite range or we can have the cakes customized,
     at Birthday Bumps imagination run wilds in all.</p>
     <button  onClick={()=>handleCake({name:"Icecream cake"},setbut13(false))}>{but13?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-300</div>}</button>
    </div>
    <div className='cake-sub-container' style={{marginRight:"2cm"}}>
    <img src={cake3}/>
    <h1>Cup Cake</h1>
    <p>A dash of decoration here and there on a cupcake, enough to make it look cute, 
    that’s how we Birthday Bumps make cupcakes. Since a child’s birthday happens to come only once a year,
     it has to have the most innovative of the cupcakes the guests have ever had.</p>
     <button  onClick={()=>handleCake({name:"Cup cake"},setbut12(false))}>{but12?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-450</div>}</button>
    </div>
    <div className='cake-sub-container'>
    <img src={cake4}/>
    <h1>Chocolate Cake</h1>
    <p>Ask any child what is his favorite dish and without giving a second thought he'd say chocolates. 
    After cakes, in a birthday party the most alluring thing for children is chocolates. 
    It would be an amazing idea to come up with fancy chocolates.</p>
    <button  onClick={()=>handleCake({name:"Chocolate cake"},setbut11(false))}>{but11?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-150</div>}</button>
    </div>
    </div>
    <div className='title-heading'>
    <h1>Party Hall</h1>
    </div>
    <div className='hall-container'>
    <div className='hall-sub-container'>
    <img src={hall1}/>
    <h1>Nk Hall</h1>
    <p>
    Street:  3078 Echo Lane<br></br>

City:  Riverside<br></br>

State/province/area:   Michigan<br></br>

Phone number:  269-849-0443<br></br>


Country:  United States
    </p>
    <button onClick={()=>handleHall({name:"Nk Hall",Street:  "3078 Echo Lane",
    City:  "Riverside",State:"Michigan",Phonenumber:"269-849-0443",Country: "United States"}
    ,setbut10(false))}>{but10?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-5000</div>}</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall2}/>
    <h1>Wonderland Hall</h1>
    <p>
    Street:  2186 Tail Ends Road<br></br>

    City:  Port Hueneme Cbc Base<br></br>
    
    State/province/area:   California<br></br>
    
    Phone number:  920-558-2798<br></br>
Country:  United States
    </p>
    <button onClick={()=>handleHall({name:"Wonderland Hall",Street:  "2186 Tail Ends Road",
    City:  "Port Hueneme Cbc Base",State:" California",Phonenumber:"920-558-2798",Country: "United States"}
    ,setbut9(false))}>{but9?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-4500</div>}</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall3}/>
    <h1>Ben Party Hall</h1>
    <p>
    Street:  1432 Dogwood Lane<br></br>

City:  Tucson<br></br>

State/province/area:   Arizona<br></br>

Phone number:  520-618-5912<br></br>


Country:  United States
    </p>
    <button onClick={()=>handleHall({name:"Ben Party Hall",Street:  "1432 Dogwood Lane",
    City:  "Tucson",State:" Arizona",Phonenumber:"520-618-5912"}
    ,setbut8(false))}>{but8?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-6000</div>}</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall4}/>
    <h1>AS Party Hall</h1>
    <p>
    Street:  2481 Briercliff Road<br></br>

    City:  Bronx<br></br>
    
    State/province/area:   New York<br></br>
    
    Phone number:  718-618-1513<br></br>


Country:  United States
    </p>
    <button onClick={()=>handleHall({name:"AS Party Hall",Street:  " 2481 Briercliff Road",
    City:  "Bronx",State:"New York",Phonenumber:"718-618-1513",Country:"United States"}
    ,setbut16(false))}>{but16?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-6500</div>}</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall5}/>
    <h1>SJ Hall</h1>
    <p>
    Street:  3932 Woodland Terrace<br></br>

    City:  Fair Oaks<br></br>
    
    State/province/area:   California<br></br>
    
    Phone number:  916-962-8978<br></br>


Country:  United States
    </p>
    <button onClick={()=>handleHall({name:"SJ hall",Street:  "3932 Woodland Terrace",
    City:  "Fair Oaks",State:"California",Phonenumber:"269-849-0443",Country:"United States"}
    ,setbut7(false))}>{but7?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-8000</div>}</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall6}/>
    <h1>Tower Hall</h1>
    <p>
    Street:  3078 Echo Lane<br></br>

City:  Riverside<br></br>

State/province/area:   Michigan<br></br>

Phone number:  269-849-0443<br></br>


Country:  United States<br></br>
    </p>
    <button onClick={()=>handleHall({name:"Tower hall",Street:  "3078 Echo Lane",
    City:  "Riverside",State:"Michigan",Phonenumber:"269-849-0443",Country:"United States"}
    ,setbut6(false))}>{but6?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-4000</div>}</button>
    </div>

    </div>
    <div className='title-heading'>
    <h1>Food</h1>
    </div>
    <div className='food-container'>
    <div className='food-sub-container'>
    <img src={food1}/>
    <h1>Veg Meals</h1>
    <div className='list-menu'>
    <li>Veg Briyani, Panner Tikka</li>
    <li>Tikka Masala, Mushroom Masala</li>
    <li>Panner Butter Masala, Fruit Salad</li>
    <li>Chapathi, Payasam</li>
    <li>Parota, Veg Masala</li>
    </div>
    <button onClick={()=>handleFood({name:"veg"},setbut1(false))}>{but1?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-7500</div>}</button>
    </div>
    <div className='food-sub-container'>
    <img src={food2}/>
    <h1>Non-veg Meals</h1>
    <div className='list-menu'>
    <li>Chicken Briyani, Parota</li>
    <li>Chicken 65, Mutton Dry</li>
    <li>Fish Fry, Pepper Chicken</li>
    <li>Chapathi, Chicken Rice</li>
    <li>Chicken Gravy, Egg Masala</li>
    </div>
    <button  onClick={()=>handleFood({name:"Non-veg"},setbut(false))}>{but?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-10000</div>}</button>
    </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div className='title-heading'>
    <h1>Activity</h1>
    </div>
    <div className='activity-container'>
    <div className='activity-sub-container' style={{marginRight:"2cm"}}>
    <img src={act1}/>
    <h1>Fun Games</h1>
    <button  onClick={()=>handleActivity({name:"Fun Games"},setbut2(false))}>{but2?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-8000</div>}</button>
    </div>
    <div className='activity-sub-container'>
    <img src={act2}/>
    <h1>DJ Party</h1>
    <button onClick={()=>handleActivity({name:"DJ Party"},setbut3(false))}>{but3?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-4000</div>}</button>
    </div>
    <div className='activity-sub-container' style={{marginRight:"2cm",marginTop:"2cm"}}>
    <img src={act3}/>
    <h1>Dancing Show</h1>
    <button  onClick={()=>handleActivity({name:"Dancing Show"},setbut4(false))}>{but4?<div>place</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-5000</div>}</button>
    </div>
    <div className='activity-sub-container' style={{marginTop:"2cm"}}>
    <img src={act4}/>
    <h1>Magic Show</h1>
    <button onClick={()=>handleActivity({name:"Magic Show"},setbut5(false))}>{but5?<div>Rs-5000</div>:<div style={{backgroundColor:"white",color:"red",fontSize:"20px",marginLeft:"-0.3cm",borderRadius:"10px",height:"0.7cm",width:"2.7cm",marginTop:"-0.3cm",padding:"0.2cm"}}>Rs-9000</div>}</button>
    </div>
    </div>
    <div className='proceed-container'>
    <button onClick={()=>{handleNav()}}>Proceed Here</button>
    </div>
    </div>
  )
}

export default Services