import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FormContainer,
  FormTitle,
  FormSubmission,
  FormSpan,
  FormInput,
  FormTextarea,
  Button,
} from "./FormStyled";

export const Form = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_mtn6fae",
        "template_4f7w5vq",
        formRef.current,
        "o3nqYIkG5NEcJ1HjD"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <FormContainer>
      <FormSubmission ref={formRef} onSubmit={handleSubmit}>
        <FormTitle>This is submission form. </FormTitle>
        <FormInput
          type="text"
          placeholder="Your full name"
          name="user_name"
          required
        />
        <FormInput
          type="text"
          placeholder="Your email"
          name="user_email"
          required
        />
        <FormTextarea
          placeholder="Your message"
          rows="7"
          name="message"
          required
        ></FormTextarea>
        <Button type="submit">Send message</Button>
        {message && <FormSpan>Thanks, I'll contact you shortly.</FormSpan>}
      </FormSubmission>
    </FormContainer>
  );
};
