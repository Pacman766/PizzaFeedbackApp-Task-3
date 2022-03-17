import { getFeedbacksFromLocalStorage, setFeedbacksIntoLocalStorage } from "../../localStorage/localStorageUtils";

export const saveFeedbackToLocalStorage = (feedback) => {
    const feedbacks = getFeedbacksFromLocalStorage();
    feedbacks.push(feedback);
    setFeedbacksIntoLocalStorage(feedbacks);
};
