import React, { useEffect, useState } from "react";
import { getFeedbacksFromLocalStorage } from "../localStorage/localStorageUtils";
import FeedbackDetails from "./FeedbackDetails/FeedbackDetails";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import { setFeedbacksIntoLocalStorage } from "../localStorage/localStorageUtils";

const Feedback = ({ name, onClose }) => {
  const [feedback, setFeedback] = useState(undefined);

  // if we have feedback on LS, find name and set it
  useEffect(() => {
    const feedBacksFromLocalStorage = getFeedbacksFromLocalStorage();
    if (feedBacksFromLocalStorage && feedBacksFromLocalStorage.length) {
      const guestFeedback = feedBacksFromLocalStorage.find(
        ({ guestName }) => guestName === name
      );
      setFeedback(guestFeedback);
    }
  }, []);

  // if we have feedback on LS, find index of guestName, 
  // splice this feedback and set to LS and set to undefined
  const handleDeleteFeedback = () => {
    const feedBacksFromLocalStorage = getFeedbacksFromLocalStorage();
    console.log(feedBacksFromLocalStorage);
    if (feedBacksFromLocalStorage && feedBacksFromLocalStorage.length) {
      const guestFeedbackIndex = feedBacksFromLocalStorage.indexOf(
        ({ guestName }) => guestName === name
      );
      console.log()
      feedBacksFromLocalStorage.splice(guestFeedbackIndex, 1);
      setFeedbacksIntoLocalStorage(feedBacksFromLocalStorage);
      setFeedback(undefined);
    }
  };

  return (
    <>
      {feedback ? (
        <FeedbackDetails feedback={feedback} onDelete={handleDeleteFeedback} onClose={onClose}/>
      ) : (
        <FeedbackForm onClose={onClose} name={name} />
      )}
    </>
  );
};

export default Feedback;
