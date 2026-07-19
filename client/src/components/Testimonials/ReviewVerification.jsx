import useReviewVerification from "../../hooks/useReviewVerification";
import "./Testimonials.css";

import TestimonialForm from "./TestimonialForm";
export default function ReviewVerification() {

  const {
    code,
    setCode,
    verify,
    loading,
    error,
    verified,
    clientName,
  } = useReviewVerification();

  return (
    <section className="review-verification">

      <h2>Leave a Verified Review</h2>

      <p>
        Every testimonial on Luncy Corner comes from a verified client.
        Enter your review code below to unlock the review form.
      </p>

     {!verified ? (

  <div className="verify-box">

    <input
      type="text"
      placeholder="LUNCY-XXXX-XXXX"
      value={code}
      onChange={(e) => setCode(e.target.value.toUpperCase())}
    />

    <button
      onClick={verify}
      disabled={loading}
    >
      {loading ? "Verifying..." : "Verify"}
    </button>

  </div>

) : (

  <>

    <div className="verified-box">

      <div className="verified-icon">
        ✓
      </div>

      <h3>
        Welcome, {clientName}
      </h3>

      <p>
        Your review code has been verified.
      </p>

    </div>

    <TestimonialForm
      clientName={clientName}
      code={code}
    />

  </>

)}
    </section>
  );

}