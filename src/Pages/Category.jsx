import Calculated from "../img/Calculated.png"
import BestFlight from "../img/Flight.png";
import LocalEvents from "../img/LocalEvent.png";
import Customization from "../img/Customization.png";
import '../css/Category.css'

const cardData = [
  { id: 1, img: Calculated, title: 'Calculated Weather', description: 'Built Wicket longer admire do barton vanity itself do in it.' },
  { id: 2, img: BestFlight, title: 'Best Flights', description: 'Engrossed listening. Park gate sell they west hard for the.' },
  { id: 3, img: LocalEvents, title: 'Local Events', description: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ' },
  { id: 4, img: Customization, title: 'Customization', description: 'We deliver outsourced aviation services for military customers' }
];

// Component
const FourCards = () => {
  return (
    <>
      <div className="container">
        
        <p>CATEGORY</p>
        <h2>We Offer Best</h2>
        <div className="card-container">
          {cardData.map(card => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FourCards;
