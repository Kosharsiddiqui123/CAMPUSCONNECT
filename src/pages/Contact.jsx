import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Custom regex patterns
  const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // RFC-style
    phone: /^\+?[0-9]{7,15}$/, // allows + and 7–15 digits
    address: /^[a-zA-Z0-9\s,.'\-/#]{5,100}$/, // realistic address
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!regex.email.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!regex.phone.test(formData.phone)) {
      newErrors.phone = "Phone must be 7–15 digits (can start with +)";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    } else if (!regex.address.test(formData.address)) {
      newErrors.address =
        "Address must be 5–100 chars, letters/numbers/special chars allowed";
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
      console.log("Form submitted successfully ✅", formData);
      setFormData({ email: "", phone: "", address: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-background" />
        <div className="container">
          <h1>CONTACTING US</h1>
          <p>
            If you prefer to reach out online, simply fill out the contact form
            below, and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="maindiv">
        <section className="contact-section">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h1 className="form-title">CONTACT US</h1>

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="map-container row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.309673671859!2d-122.41941518468163!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8f4c5e5%3A0xa2c5e5d8f9c75b8d!2sUniversity!5e0!3m2!1sen!2sus!4v1694433600000!5m2!1sen!2sus"
              width="1200"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
