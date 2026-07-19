import { useState } from "react";

import ReviewVerification from "../../components/Testimonials/ReviewVerification";
import TestimonialForm from "../../components/Testimonials/TestimonialForm";
import TestimonialSection from "../../components/Testimonials/TestimonialSection";

export default function Testimonials() {

  const [verifiedData, setVerifiedData] = useState(null);

  return (

  <main className="testimonials-page">

    <div className="blur-circle blur-pink"></div>
    <div className="blur-circle blur-blue"></div>

    <div className="testimonials-container">

        <section className="testimonial-hero">

            <span>Kind Words</span>

            <h1>
                Every project leaves
                a beautiful story.
            </h1>

            <p>
                Every testimonial shared here comes from
                verified clients who trusted Luncy Corner
                to bring their ideas to life.
            </p>

            <div className="hero-divider"></div>

       

        
 



      <TestimonialSection />

      <ReviewVerification

        onVerified={setVerifiedData}

      />
      
      {

        verifiedData && (

          <TestimonialForm

            code={verifiedData.code}

          />

        )

      }
       </section>
         </div>

    </main>

  );

}