import { useState } from "react";
import { verifyReviewCode } from "../services/testimonialService";

export default function useReviewVerification() {

    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [client, setClient] = useState(null);
    const [error, setError] = useState("");

    async function verify(code) {

        try {

            setLoading(true);
            setError("");

            const data = await verifyReviewCode(code);

            setVerified(true);

            setClient(data);

        } catch (err) {

            setVerified(false);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    }

    return {

        verify,

        verified,

        client,

        loading,

        error

    };

}