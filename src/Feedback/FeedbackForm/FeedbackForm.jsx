import React from "react";
import { useForm } from "react-hook-form";
import StarsField from "../StarsField/StarsField";
import { FEEDBACK_FORM_FIELDS } from "./constants";
import { saveFeedbackToLocalStorage } from "./utils";
import "./feedbackForm.scss";

const FeedbackForm = ({ name, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      [FEEDBACK_FORM_FIELDS.RATING]: "3",
    },
    mode: "all",
  });
  const onSubmit = (data) => {
    if (isValid) {
    const feedback = { guestName: name, ...data };
    saveFeedbackToLocalStorage(feedback);
    onClose();}
    else {
      onClose();
    }
  };

  const onError = (err) => {
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <p className="field_name">Name</p>
      <p>{name}</p>
      <StarsField register={register} />
      <p className="field_name">Phone</p>
      <input
      onChange={()=>{}}
        type="text"
        {...register("phone", {
          required: true,
          pattern: {
            value: /^[+]?[(]?[0-9][)]?[-\s.]?[0-9][-\s.]?[0-9]{1,8}$/,
            message: "invalid phone"
          }
        })}
      />
      {errors.phone && errors.phone.message}
      <p className="field_name">Comment</p>
      <textarea
        id="comment"
        onChange={()=>{}}
        {...register("comment", { required: true,
        })}
      />
      <button type="submit">{isValid ? "Save" : "Cancel"}</button>
    </form>
  );
};

export default FeedbackForm;
