

function Contact() {
  return (
    <div className="contact-section" style={{ marginLeft: "240px" }}>

      <h1 className="title">Get in Touch</h1>
      <p className="subtitle">
        We’d love to hear from you! For support, feedback, or business inquiries, reach out anytime.
      </p>

      <div className="contact-wrapper">

        {/* CONTACT FORM */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" required />

          <textarea rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* CONTACT DETAILS */}
        <div className="contact-details">
          <h2>Contact Information</h2>

          <div className="detail-box">
            <h3>📍 Address</h3>
            <p>45 Business Street,<br />Bangalore, India – 560001</p>
          </div>

          <div className="detail-box">
            <h3>📞 Phone</h3>
            <p>+91 90000 12345</p>
          </div>

          <div className="detail-box">
            <h3>✉ Email</h3>
            <p>help@shopease.in</p>
          </div>

          <div className="detail-box">
            <h3>🕒 Working Hours</h3>
            <p>Mon – Sat : 9:00 AM to 7:00 PM</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
