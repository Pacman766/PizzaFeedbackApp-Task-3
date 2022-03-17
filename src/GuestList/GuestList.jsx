import React, { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
import { setFeedbacksIntoLocalStorage } from "../localStorage/localStorageUtils";
import "./guestsList.scss";
import Guest from "./Guest/Guest";
import {
  fetchDietsAsync,
  fetchGuestsAsync,
  getDietsFromLocalStorage,
  getGuestsFromLocalStorage,
  setDietsIntoLocalStorage,
  setGuestsIntoLocalStorage,
} from "./utils";

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [diets, setDiets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedbackDialogshown, setIsFeedbackDialogShown] = useState(false);
  const [clickedUserName, setClickedUserName] = useState(undefined);

  const loadGuestsAsync = async () => {
    const guests = await fetchGuestsAsync();
    setGuests(guests);
    setGuestsIntoLocalStorage(guests);
    setFeedbacksIntoLocalStorage([]);
    return guests;
  };

  const loadDietsAsync = async (guests, shouldSetLoading = false) => {
    if (shouldSetLoading) {
      setIsLoading(true);
    }

    const diets = await fetchDietsAsync(
      guests.filter((elem) => elem.eatsPizza)
    );
    setDiets(diets);
    setDietsIntoLocalStorage(diets);

    if (shouldSetLoading) {
      setIsLoading(false);
    }

    return diets;
  };

  const loadPageAsync = async () => {
    setIsLoading(true);
    const guests = await loadGuestsAsync();
    await loadDietsAsync(guests);
    setIsLoading(false);
  };

  useEffect(() => {
    const guestsInStorage = getGuestsFromLocalStorage();
    if (guestsInStorage && guestsInStorage.length) {
      setGuests(guestsInStorage);
      const dietsFromStorage = getDietsFromLocalStorage();
      if (dietsFromStorage && dietsFromStorage.length) {
        setDiets(dietsFromStorage);
      } else {
        loadDietsAsync(guestsInStorage, true);
      }
    } else {
      loadPageAsync();
    }
  }, []);

  const handleClick = (name) => {
    setIsFeedbackDialogShown(true);
    setClickedUserName(name);
  };

  const handleFeedbackDialogClose = () => {
    setIsFeedbackDialogShown(false);
  };

  const handleCleaner = () => {
    localStorage.removeItem("feedbacks");
    localStorage.removeItem("diets");
    localStorage.removeItem("guests");
    setGuests([]);
    loadPageAsync();
  };

  return (
    <div className="container">
      {isFeedbackDialogshown ? (
        <Feedback
          name={clickedUserName}
          onClose={handleFeedbackDialogClose}
        />
      ) : (
        <>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            <>
              {guests.map(({ name, eatsPizza }) => (
                <Guest
                  key={name}
                  name={name}
                  diets={diets}
                  eatsPizza={eatsPizza}
                  onClick={handleClick}
                />
              ))}
              <button onClick={handleCleaner}>Clear app</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GuestList;
