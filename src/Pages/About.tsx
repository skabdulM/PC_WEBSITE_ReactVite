import React, { useEffect } from "react";
import NavBar from "../components/nav";
import './About.css'
import AOS from 'aos';

import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <NavBar />
      <section className="about" >
        <h1 className="aboutpage" data-aos='fade-in' data-aos-duration='1000' >About</h1>
      </section>
    </>
  );
};

export default About;
