import React, { useState } from "react";
import "../css/register.css";
import eventsData from "../data/eventsData.json";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    event: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Regex patterns
  const regex = {
    name: /^[A-Za-z\s]{2,30}$/, // only alphabets, min 2, max 30 chars
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contact: /^\+?[0-9]{7,15}$/, // allows + and 7–15 digits
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!regex.name.test(formData.firstName)) {
      newErrors.firstName = "First name must be 2–30 letters only";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!regex.name.test(formData.lastName)) {
      newErrors.lastName = "Last name must be 2–30 letters only";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!regex.email.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.contact) {
      newErrors.contact = "Contact is required";
    } else if (!regex.contact.test(formData.contact)) {
      newErrors.contact = "Phone must be 7–15 digits (can start with +)";
    }

    if (!formData.event) {
      newErrors.event = "Please select an event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", contact: "", event: "" });
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h2 className="form-title">Event Registration</h2>
        <p className="form-subtitle">Register now to be part of amazing experiences!</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error-input" : ""}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error-input" : ""}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className={errors.contact ? "error-input" : ""}
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>

          <div className="form-group">
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              className={errors.event ? "error-input" : ""}
            >
              <option value="">-- Select Event --</option>
              {eventsData.map((event) => (
                <option key={event.id} value={event.title}>
                  {event.title}
                </option>
              ))}
            </select>
            {errors.event && <p className="error">{errors.event}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Register Now
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Registration Successful!</h2>
            <p>Thank you for registering. We’ll see you at the event!</p>
            <button onClick={() => setSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
