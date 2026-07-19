import { useEffect, useState } from "react";
import { getTestimonials } from "../services/testimonialService";

export default function useTestimonials() {

    const [testimonials, setTestimonials] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadTestimonials();

    }, []);

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

    return {

        testimonials,

        loading,

        error,

        refresh: loadTestimonials

    };

}