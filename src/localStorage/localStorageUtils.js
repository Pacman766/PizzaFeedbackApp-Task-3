export const getStorageValue = (key, defaultValue = undefined) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const setStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFeedbacksFromLocalStorage = () => {
  return getStorageValue('feedbacks', []);
};

export const setFeedbacksIntoLocalStorage = (feedbacks) => {
  setStorageValue('feedbacks', feedbacks);
};
