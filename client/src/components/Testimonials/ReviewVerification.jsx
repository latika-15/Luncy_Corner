import { useState, useEffect } from "react";
import useReviewVerification from "../../hooks/useReviewVerification";

export default function ReviewVerification({ onVerified }) {
  const [code, setCode] = useState("");

  const {
    verify,
    verified,
    client,
    loading,
    error,
  } = useReviewVerification();

  async function handleSubmit(e) {
    e.preventDefault();
    await verify(code);
  }

  useEffect(() => {
    if (verified && client) {
      onVerified({
        code,
        client,
      });
    }
  }, [verified, client, code, onVerified]);

  return (
    <section className="review-verification">

      <h2>Leave a Verified Review</h2>

      <p>
        Every testimonial displayed here comes from a verified client.
        Enter your unique review code to unlock the review form and
        share your experience working with Luncy Corner.
      </p>

      <form
        className="verify-box"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="LC-XXXX-XXXX"
          value={code}
          onChange={(e) =>
            setCode(e.target.value.toUpperCase())
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

      </form>

      {verified && client && (

        <div className="verified-box">

          <div className="verified-icon">
            ✓
          </div>

          <h3>
            Welcome, {client.clientName}
          </h3>

          <p>
            Your review code has been successfully verified.
            You can now continue and submit your testimonial.
          </p>

        </div>

      )}

      {error && (

        <div className="error">
          {error}
        </div>

      )}

    </section>
  );
}