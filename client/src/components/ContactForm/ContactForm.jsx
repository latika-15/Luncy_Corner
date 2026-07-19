import "./ContactForm.css";
import useContactForm from "../../hooks/useContactForm";

function ContactForm() {

  const {
  formData,
  loading,
  success,
  error,
  handleChange,
  handleSubmit,
  resetForm,
} = useContactForm();

  if (success) {
    return (
      <section className="contact-form-section">
        <div className="container">

          <div className="success-card">

            <div className="success-icon">
              ♡
            </div>

            <h2>Thank you.</h2>

            <p>
              Your inquiry has been received.
              <br />
              I'll get back to you within
              <strong> 24–48 hours.</strong>
            </p>

            <button
              className="submit-btn"
              onClick={resetForm}
            >
              Send Another Message
            </button>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section">

      <div className="container">

        <div className="contact-heading">

          <h2>Let's Create Something Beautiful</h2>

          <p>
            Whether it's a brand identity,
            magazine,
            social media campaign,
            or presentation —
            I'd love to hear about your project.
          </p>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-grid">

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="+919876543210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Service</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose a Service</option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Magazine Design">Magazine Design</option>
                <option value="Social Media Design">Social Media Design</option>
                <option value="Canva Templates">Canva Templates</option>
              </select>
            </div>

          </div>

          <div className="form-group">

            <label>Message</label>

            <textarea
              rows="7"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

    <button
  type="submit"
  className="submit-btn"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Inquiry"}
</button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;