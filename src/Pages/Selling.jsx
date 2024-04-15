import React from 'react';
import Remo from "../img/Remo.png";
import London from "../img/London.png";
import Full from "../img/Full.png";
import '../css/Selling.css'

const cardData = [
  { id: 1, img: Remo, title: 'Calculated Weather' },
  { id: 2, img: London, title: 'Best Flights'},
  { id: 3, img: Full, title: 'Local Events'},
];

const cardDetails = [
  { id: 1, img: Remo, address:'Rome, Italy' , Rupees:"$5.42K" ,Skype: `$10Days Trip`},
  { id: 2, img: London, address:'London, UK',Rupees:"$4.2K" ,Skype: `10Days Trip`},
  { id: 3, img: Full, address:'Full Europe',Rupees:"$15K",Skype: `10Days Trip`},
];

const Selling = () => {
  return (
    <div className="selling-container">
      <h4>Top Selling</h4>
      <h2>Top Destinations</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.title} className="card-image" />
            <h6 className="card-title">{card.title}</h6>
            <div className="card-detail">
              <p >{cardDetails[index].address}</p>
              <p >{cardDetails[index].Rupees}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;
