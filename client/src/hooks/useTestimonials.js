import { useEffect, useState } from "react";
import { getTestimonials } from "../services/testimonialService";

export default function useTestimonials() {

    const [testimonials, setTestimonials] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function loadTestimonials() {

            try {

                const data = await getTestimonials();

                setTestimonials(data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        }

        loadTestimonials();

    }, []);

    return {

        testimonials,

        loading,

        error

    };

}