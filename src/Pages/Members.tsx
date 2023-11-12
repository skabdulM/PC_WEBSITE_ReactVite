
import NavBar from "../components/nav";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './Members.css'
import Card from "../components/Card";
import CardData from "../components/CardData";
const Members = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <NavBar />
      <section className="title">
        <h1>Members 2023</h1>
        <hr className="line"/>
      </section>
      <section className="members-card m-5">
        <div data-aos='fade-up' data-aos-duration='1000'>
          <div className="row">
            <Card details={CardData}></Card>
              
          </div>
        </div>
      </section>


      <Footer></Footer>
    </>
  );
};

export default Members;
