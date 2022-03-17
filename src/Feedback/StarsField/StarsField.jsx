import { FEEDBACK_FORM_FIELDS } from "../FeedbackForm/constants";
import "./starsField.scss";

const StarsField = ({ register }) => {
  return (
    <div className="rating-area">
      <input {...register(FEEDBACK_FORM_FIELDS.RATING)} type="radio" id="star-5" name={FEEDBACK_FORM_FIELDS.RATING} value="5" />
      <label htmlFor="star-5" title="Оценка «5»"></label>
      <input {...register(FEEDBACK_FORM_FIELDS.RATING)} type="radio" id="star-4" name={FEEDBACK_FORM_FIELDS.RATING} value="4" />
      <label htmlFor="star-4" title="Оценка «4»"></label>
      <input {...register(FEEDBACK_FORM_FIELDS.RATING)} type="radio" id="star-3" name={FEEDBACK_FORM_FIELDS.RATING} value="3" />
      <label htmlFor="star-3" title="Оценка «3»"></label>
      <input {...register(FEEDBACK_FORM_FIELDS.RATING)} type="radio" id="star-2" name={FEEDBACK_FORM_FIELDS.RATING} value="2" />
      <label htmlFor="star-2" title="Оценка «2»"></label>
      <input {...register(FEEDBACK_FORM_FIELDS.RATING)} type="radio" id="star-1" name={FEEDBACK_FORM_FIELDS.RATING} value="1" />
      <label htmlFor="star-1" title="Оценка «1»"></label>
    </div>
  );
};

export default StarsField;
