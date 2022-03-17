import React from "react";

const StarsInfoField = ({ rating }) => {
  return (
    <div className="rating-area">
      <input type="radio" id="star-5" value="5" disabled defaultChecked={rating === "5"} />
      <label htmlFor="star-5" title="Оценка «5»"></label>
      <input type="radio" id="star-4" value="4" disabled defaultChecked={rating === "4"} />
      <label htmlFor="star-4" title="Оценка «4»"></label>
      <input type="radio" id="star-3" value="3" disabled defaultChecked={rating === "3"} />
      <label htmlFor="star-3" title="Оценка «3»"></label>
      <input type="radio" id="star-2" value="2" disabled defaultChecked={rating === "2"} />
      <label htmlFor="star-2" title="Оценка «2»"></label>
      <input type="radio" id="star-1" value="1" disabled defaultChecked={rating === "1"} />
      <label htmlFor="star-1" title="Оценка «1»"></label>
    </div>
  );
};

export default StarsInfoField;
