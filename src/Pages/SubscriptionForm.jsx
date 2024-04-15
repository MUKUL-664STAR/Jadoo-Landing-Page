import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa'; // Import the send icon from react-icons
import "../css/SubscriptionForm.css"; 

const SubscriptionForm = () => {
  return (
    <div className="subscription-container">
      
      <div className="form-container">
      <p>Subscribe to get information, latest news and other <br></br>
interesting offers about Cobham</p>
<span>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
        </span>
        <FaRegPaperPlane className="send-icon" /> {/* Use the send icon from react-icons */}
      </div>
    </div>
  );
};

export default SubscriptionForm;
