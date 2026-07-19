import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">

      <div className="testimonial-stars">
        {"★★★★★"}
      </div>

      <p className="testimonial-message">
        "{testimonial.message}"
      </p>

      <div className="testimonial-footer">

        <h3>{testimonial.name}</h3>

        <span>{testimonial.role}</span>

      </div>

    </article>
  );
}

export default TestimonialCard;