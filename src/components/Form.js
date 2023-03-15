import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Full Name"
        name="user_name"
        required
      />
      <input type="text" placeholder="Your Email" name="user_email" required />
      <textarea
        placeholder="Your message"
        rows="7"
        name="message"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
      {message && <span>Thanks, I'll contact you shortly.</span>}
    </form>
  );
};
