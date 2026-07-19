import "./Testimonials.css";

export default function TestimonialsSkeleton(){

return(

<div className="testimonial-grid">

{

Array.from({length:3}).map((_,index)=>(

<div

key={index}

className="testimonial-skeleton"

/>

))

}

</div>

)

}