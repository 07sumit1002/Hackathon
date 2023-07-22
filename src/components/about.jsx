import React from "react";
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
// import Footer from "./footer";
import Mentorimg from "./supplie/Mentor.png";
import Sumitimg from './supplie/res.jpeg';
import memberimg from './supplie/Mentor-ing.png'

const about = () => {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <div className="About">
        <div className="About-top">
          <div className="About-mentor">
            <a
              className="Member-link"
              href="https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/Somya-Goyal.html"
            >
              <img className="Mentor-img" src={Mentorimg} alt=" " />
            </a><br />
            <div className="Mentor-name">
              We would like to extend our heartfelt gratitude to our mentor Ms
              Somya Goyal for her invaluable guidance, support, and expertise
              throughout this project. Ms Somya Goyal holds the position of
              Assistant Professor at Manipal University Jaipur. Thank you for
              being an inspiring and dedicated mentor.
            </div>
          </div>
          <div className="About-team">
            &nbsp;
            <div className="Member">
              <img className="Member-img" src={memberimg} alt="" />
              &nbsp;
              <div className="Member-detail">
                <a className="Member-link" href="https://www.linkedin.com/in/er-aditi-soni/">
                  <h2 className="Member-h2">Aditi Soni</h2>
                </a>
                <p>Graphic Desginer</p>
                <p>Manipal University Jaipur</p>
                <p>BTech CSE 3rd Year</p>
              </div>
            </div>
            &nbsp;
            <div className="Member">
              <img className="Member-img" src={memberimg} alt="" />
              &nbsp;
              <div className="Member-detail">
                <a className="Member-link" href="">
                  <h2 className="Member-h2">Aayush Singh</h2>
                </a>
                <p>Frontend Developer</p>
                <p>Manipal University Jaipur</p>
                <p>BTech CSE-IoT 2nd Year</p>
              </div>
            </div>
            &nbsp;
            <div className="Member">
              <img className="Member-img" src={Sumitimg} alt="" />
              &nbsp;
              <div className="Member-detail">
                <a className="Member-link" href="https://www.linkedin.com/in/er-sumit-kr/">
                  <h2 className="Member-h2">Sumit Kumar</h2>
                </a>
                <p>Full-stack Developer</p>
                <p>Manipal University Jaipur</p>
                <p>BTech CSE 3rd Year</p>
              </div>
            </div>
          </div>
        </div>
        <div className="About-bottom">Team JourneyPal</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default about;
