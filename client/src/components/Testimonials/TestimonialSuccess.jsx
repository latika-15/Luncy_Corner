import "./Testimonials.css";

export default function TestimonialSuccess({ clientName }) {

return(

<section className="testimonial-success">

<div className="success-icon">

✓

</div>

<h2>

Thank You,

{clientName}

</h2>

<p>

Your testimonial has been submitted successfully.

It will appear on Luncy Corner after approval.

</p>

<a
href="/"
className="success-btn"
>

Back to Home

</a>

</section>

)

}