import "./Testimonials.css";
import StarRating from "../StarRating/StarRating";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">

      <div className="review-badge">
        ♡
      </div>

      <div className="stars">
        <StarRating
          rating={testimonial.rating}
          readonly
        />
      </div>

      <p className="review">
        "{testimonial.message}"
      </p>

      <div className="client">

        <div className="client-avatar">
          {testimonial.clientName.charAt(0).toUpperCase()}
        </div>

        <div className="client-info">

          <h4>
            {testimonial.clientName}
          </h4>

          <span>
            Verified Client
          </span>

        </div>

      </div>

    </article>
  );
}