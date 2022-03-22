import { getFeedbacksFromLocalStorage, setFeedbacksIntoLocalStorage } from "../../localStorage/localStorageUtils";

// save new feedback to LS
export const saveFeedbackToLocalStorage = (feedback) => {
    const feedbacks = getFeedbacksFromLocalStorage();
    feedbacks.push(feedback);
    setFeedbacksIntoLocalStorage(feedbacks);
};
