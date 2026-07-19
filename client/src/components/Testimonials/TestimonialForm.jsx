import { useState } from "react";
import { submitReview } from "../../services/testimonialService";
import TestimonialSuccess from "./TestimonialSuccess";

export default function TestimonialForm({ clientName, code }) {
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim().length < 20) {
      setError("Please write at least 20 characters.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await submitReview({
        code,
        rating,
        message,
      });

      setSuccess(true);

      setMessage("");
      setRating(5);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };



if(success){

return(

<TestimonialSuccess

clientName={clientName}

/>

)

}

  return (
    <form
      onSubmit={handleSubmit}
      className="testimonial-form"
    >
      <h3>Share your experience</h3>

      <p className="review-subtitle">
        Your feedback helps future clients know what it's like working with Luncy Corner.
      </p>

      <div className="rating">
       <StarRating

rating={rating}

onChange={setRating}

/>
      </div>

      <p className="rating-text">
        {rating} / 5 Stars
      </p>

      <textarea
        rows="6"
        placeholder="Tell others about your experience working with Luncy Corner..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

    </form>
  );
}