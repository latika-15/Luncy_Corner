export default function TestimonialCard({ testimonial }) {

    return (

        <article className="testimonial-card">

            <div className="stars">

                <StarRating

rating={testimonial.rating}

readonly

/>

            </div>

            <p className="review">

                "{testimonial.message}"

            </p>

            <h4>

                — {testimonial.clientName}

            </h4>

        </article>

    );

}