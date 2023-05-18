// ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server
    sendForm();
  };

  const sendForm = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Form submitted successfully
        console.log("Email sent!");
        // Perform any additional actions (e.g., show success message, clear form, etc.)
      } else {
        // Handle form submission error
        console.log("Error sending email");
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
