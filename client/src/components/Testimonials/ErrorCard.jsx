import "./Testimonials.css";

export default function ErrorCard({message}){

return(

<div className="testimonial-error">

<div className="error-icon">

⚠

</div>

<h3>

Something Went Wrong

</h3>

<p>

{message}

</p>

</div>

)

}