import Rectangle from "../img/Book1.png";
import Book2 from "../img/Book2.png";
import Book3 from "../img/Book3.png";
import Boo from "../img/Book.png";
import Ellipse3 from "../img/Ellipse3.png";
import Ellipse4 from "../img/Ellipse4.png";
import Ellipse5 from "../img/Ellipse5.png";
import "../css/Book.css";
const Book = () => {
  return (
    <div className="Book">
      <div className="BookContent">
        <h5>Easy and Fast</h5>
        <h3>
          Book your next trip <br />
          in 3 easy steps
        </h3>
        <div className="BookSteps">
          <div className="BookSteps1">
            <img src={Rectangle} alt="" className="Book__step-image" />
            <span>
              <h6>Choose</h6>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </span>
          </div>
          <div className="BookSteps1">
            <img src={Book2} alt="" className="Book__step-image" />
            <span>
              <h6>Make Payment</h6>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </span>
          </div>
          <div className="BookSteps1">
            <img src={Book3} alt="" className="Book__step-image" />
            <span>
              <h6>Reach Airport on Selected Date</h6>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </span>
          </div>
        </div>
      </div>
      <div className="BookDetails">
        <img src={Boo} alt="" className="BookThumbnail" />
        <div className="Booktrip">
          <p>Trip To Greece</p>
          <div className="BookAuthor">
            <p>14:29</p>
            <p>by Robbin</p>
          </div>
          <div className="BookAttendees">
            <img src={Ellipse3} alt="" className="Book__attendee-icon" />
            <img src={Ellipse4} alt="" className="Book__attendee-icon" />
            <img src={Ellipse5} alt="" className="Book__attendee-icon" />
            <p>24 People</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
