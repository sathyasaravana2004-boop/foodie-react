import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Header */}

      <section className="contact-header">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <span>
          Have a question or feedback? We'd love to hear from you.
        </span>
      </section>


      {/* Contact Content */}

      <section className="contact-content">

        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p>
            Whether you have a question about our restaurants,
            menu or services, our team is ready to help.
          </p>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@foodie.com</p>
            </div>
          </div>

        </div>


        {/* Form */}

        <div className="contact-form-container">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>


            <button type="submit" className="submit-btn">
              Send Message
            </button>


            {submitted && (
              <p className="success-message">
                ✓ Thank you! Your message has been submitted.
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  );
}

export default Contact;