    
//import React from "react";
import { Carousel } from "antd";
import cimg1 from "../assets/Images/birth1.jpg";
import cimg2 from "../assets/Images/birth2.jpg";
import cimg3 from "../assets/Images/birth3.jpg";
const Slideshow = () => (
  <Carousel
    autoplay
    // effect="fade"
    style={{ marginTop: "", transition: "ease" }}  >
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      ></div>
      <div>      
      </div>
    </div>
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div style={{ width: "1300px" }}>
       
      </div>
    </div>
    <div>
      <div
        style={{
          height: "500px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>    
    </div>
  </Carousel>

);
export default Slideshow;