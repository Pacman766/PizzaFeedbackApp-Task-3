import React from "react";
import StarsInfoField from "./StarsInfoField/StarsInfoField";
import './feedbackDetails.scss'

const FeedbackDetails = ({ feedback, onDelete, onClose }) => {
  
  return <div className='feedback_details'>
      <div className='field_header'>
      <p className='field_name'>Name</p>
      <button className='field_name' onClick={onClose} id='close_button'>X</button>
      </div>
      <p>{feedback.guestName}</p>
      <StarsInfoField rating={feedback.rating} />
      <p className='field_name'>Phone</p>
      <p>{feedback.phone}</p>
      <p className='field_name'>Comment</p>
      <p>{feedback.comment}</p>
      <button onClick={onDelete}>Delete</button>
  </div>;
};

export default FeedbackDetails;
