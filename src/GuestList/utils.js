import { getStorageValue, setStorageValue } from "../localStorage/localStorageUtils";

export const getGuestsFromLocalStorage = () => {
    return getStorageValue("guests", []);
}

export const setGuestsIntoLocalStorage = (guests) => {
    setStorageValue("guests", guests);
}

export const getDietsFromLocalStorage = () => {
  return getStorageValue("diets", []);
}

export const setDietsIntoLocalStorage = (diets) => {
  setStorageValue("diets", diets);
}

// get guests
export const fetchGuestsAsync = async () => {
  const data = await fetch("https://gp-js-test.herokuapp.com/pizza/guests");
  const result = await data.json();
  return result.party;
}

// get encoded names
export const fetchDietsAsync = async (people) => {
  const peopleNamesEncoded = people.map(({ name }) =>
    encodeURIComponent(name)
  );

  const response = await fetch(
    `https://gp-js-test.herokuapp.com/pizza/world-diets-book/${peopleNamesEncoded.join()}`
  );
  const data = await response.json();
  return data.diet;
};