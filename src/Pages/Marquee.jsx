import "../css/Marquee.css"; 
import Marquee1 from '../img/image 27.png'
import Marquee2 from '../img/image 28.png'
import Marquee3 from '../img/image 30.png'
import Marquee4 from '../img/image 31.png'
import Marquee5 from '../img/Group 63.png'
const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <img src={Marquee1} alt="Image 1" />
        <img src={Marquee2} alt="Image 2" />
        <img src={Marquee3} alt="Image 3"  style={{ height: "100px" }}/>
        <img src={Marquee4} alt="Image 4" style={{ height: "100px" }}/>
        <img src={Marquee5} alt="Image 5" />
      </div>
    </div>
  );
};

export default Marquee;
