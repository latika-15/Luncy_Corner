import useTestimonials from "../../hooks/useTestimonials";
import TestimonialCard from "./TestimonialCard";
import EmptyTestimonials from "./EmptyTestimonials";

export default function TestimonialSection() {

    const {

        testimonials,

        loading,

        error

    } = useTestimonials();

    if (loading) {

        return <p>Loading testimonials...</p>;

    }

    if (error) {

        return <p>{error}</p>;

    }

    if (loading) {

    return <TestimonialsSkeleton />;

}

if (error) {

    return <ErrorCard message={error} />;

}

return (

<section className="testimonial-section">

<h2 className="section-title">

Kind Words

</h2>

<p className="section-subtitle">

Every review comes from a verified client.

</p>

{

testimonials.length===0

?

<EmptyTestimonials/>

:

<div className="testimonial-grid">

{

testimonials.map((testimonial)=>(

<TestimonialCard

key={testimonial._id}

testimonial={testimonial}

/>

))

}

</div>

}

</section>

)

    

}