import React from "react";
import Slideshow from "./carousel";
import Navbar from "./navbar";
import p2 from "../assets/Images/mission.jpg";
import "../assets/CSS/home.css";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontFamily: "Bahnschrift Condensed", marginTop: "5%" }}>
          ACE D EVENTS
        </h2>
        <h1
          style={{
            fontWeight: "50px",
            fontFamily: "Arial Black",
            marginTop: "1%",
          }}
        >
          A Complete Event Management Solution
        </h1>
        <div style={{ width: "40px", border: "1px solid blue" }}></div>
        <h2 style={{ fontFamily: "Bahnschrift Condensed", marginTop: "2%" }}>
          The Most Successful Event Is The One That Achieves Your Goals And
          Exceeds Your Expectations. ACE D Events Does Just That!
        </h2>
      </div>

      <div
        className="mission"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <img src={p2} style={{ height: "150vh" }} />
        </div>
        <div style={{ width: "100%" }}>
          <h1
            style={{
              marginBottom: "10%",
              marginLeft: "10%",
              fontFamily: "Arial Black",
            }}
          >
            Mission Statement
          </h1>
          <h2 style={{ fontFamily: "Bahnschrift Condensed" ,marginLeft:'3%'}}>
            ACE D Events’ primary mission is to plan and execute outstanding
            events for each client with exceptional professionalism and utmost
            attention to budgets and details.
          </h2>
          <h1 style={{marginLeft:'3%'}}>
            285
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;220&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;548&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8598
          </h1>
          <h1 style={{marginLeft:'3%'}}>
            Events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Clients
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Videos
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Images
          </h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div className='footer' style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div>
            <h1 style={{fontFamily:'Brush Script MT',margin:'2%',width:'100%'}}>ACE D EVENTS ORGANIZERS</h1>
            <div>

            </div>
          </div>
      </div> */}
      <Footer/>
    </div>
    
  );
};
export default Home;
