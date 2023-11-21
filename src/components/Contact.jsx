import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmissionStatus("success");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Reach Me Out</h2>

        {submissionStatus === "success" && (
          <p style={{ color: "green" }}>Form submitted successfully!</p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;

