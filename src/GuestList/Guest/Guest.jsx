import React, { useEffect, useState } from "react";
import "./guests.scss";
import { getFeedbacksFromLocalStorage } from "../../localStorage/localStorageUtils";



const Guest = ({ name, eatsPizza, diets, onClick }) => {
  // arr of vegans names
  let vegans = diets.filter((person) => person.isVegan).map((it) => it.name);

  const [feedback, setFeedback] = useState(undefined);

  // if we have feedback on LS, find and set feedback name 
  useEffect(() => {
    const feedBacksFromLocalStorage = getFeedbacksFromLocalStorage();
    if (feedBacksFromLocalStorage && feedBacksFromLocalStorage.length) {
      const guestFeedback = feedBacksFromLocalStorage.find(
        ({ guestName }) => guestName === name
      );
      setFeedback(guestFeedback);
    }
  }, []);
  
  return (
    <p
      className={
        vegans.indexOf(name) > -1 && eatsPizza
          ? "vegans"
          : eatsPizza
          ? "eatsPizza"
          : "noEatsPizza"
      }
      onClick={() => onClick(name)}
    >
      {feedback ? `✔️ ${name}` : name}
    </p>
  );
};

export default Guest;
