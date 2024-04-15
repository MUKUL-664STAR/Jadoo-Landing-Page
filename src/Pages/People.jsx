import Peple from "../img/People.png";
import '../css/People.css'

const People = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials2">
        <h3>Testimonials</h3>
        <p>
          What people say <br></br>
          about Us.
        </p>
      </div>
      <div className="Testimonials1">
        <img src={Peple} alt="People" />
        <span >
          <p>
            “On the Windows talking painted pasture yet its <br></br> express parties use.
            Sure last upon he same as <br></br> knew next. Of believed or diverted no.”
          </p>
          <span>
          <h3>Mike taylor</h3>
          <p>Lahore, Pakistan</p>
          </span>
          <span className="Test">
          <p>Chris Thomas</p>
        <p>CEO of Red Button</p>
        </span>
        </span>

      </div>
    </div>
  );
};

export default People;
