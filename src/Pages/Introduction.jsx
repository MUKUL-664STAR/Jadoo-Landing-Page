import PlayDemo from '../img/PlayDemo.png';
import Image from '../img/Image.png';
import '../css/Intro.css';
const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="content">
        <h4>Best Destination around the world</h4>
        <h2>Travel, enjoy<br></br> and live a new <br></br>and full life</h2>
        <p>
          Built wicket langer admire barton varitity it self do it .<br></br>
          Preferred to sportsmen it engrassed listening. Park gate<br></br> sell  they
          west hard for the .
        </p>

        
        <span >
        <button>Find Out More</button>   
          {/* <img src={PlayDemo} alt="Play Demo" className="play-demo" />
          <p>Play Demo</p> */}
          <button className='DemoPlay'>Demo Play</button>
        </span>
      </div>
      <div className="image">
        <img src={Image} alt="Image" />
      </div>
    </div>
  );
};

export default Introduction;
