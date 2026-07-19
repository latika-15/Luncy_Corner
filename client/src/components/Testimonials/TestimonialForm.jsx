import { useState } from "react";
import StarRating from "../StarRating/StarRating";
import { submitReview } from "../../services/testimonialService";

export default function TestimonialForm({ client, code }) {
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await submitReview({
        code,
        rating,
        message,
      });

      setSuccess(true);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h3>Thank You!</h3>

        <p>
          Your testimonial has been submitted successfully.
          Thank you for taking the time to share your experience.
        </p>

      </section>
    );
  }

  return (
    <section className="testimonial-form">

      <h2>Write Your Experience</h2>

      <p>
        Thank you, <strong>{client.clientName}</strong>.
        Your feedback helps build trust and allows future clients
        to understand what it's like working with Luncy Corner.
      </p>

      <form onSubmit={handleSubmit}>

        <label>

          Overall Rating

          <div className="rating-wrapper">

            <StarRating
              rating={rating}
              onChange={setRating}
            />

          </div>

        </label>

        <label>

          Your Testimonial

          <textarea
            placeholder="Tell us about your experience working together..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

        </label>

        {error && (

          <div className="form-error">

            {error}

          </div>

        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Testimonial"}
        </button>

      </form>

    </section>
  );
}