import Lottie from "lottie-react";
import bannerAni from "../../assets/animation/Animation - 1739334089296.json";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
        <div className="banner-left">
          <h1 className="banner-heading">Sonia</h1>
          <p className="banner-intro">
            I am a Frontend Developer with 3 years of experience in ReactJS and modern web development technologies.
          </p>
          <a href="/path-to-cv" download>
            <button className="cv-btn">Download CV</button>
          </a>
        </div>
        <div className="right-sec">
          <div className="banner-right">
            <Lottie animationData={bannerAni} loop={true} />
          </div>
        </div>
     </div>
  
  );
};

export default Banner;
