const API = "http://localhost:5000/api/testimonials";

/* -------------------------
   Verify Review Code
------------------------- */

export async function verifyReviewCode(code) {

    const response = await fetch(`${API}/verify`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            code,
        }),

    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}

/* -------------------------
   Submit Testimonial
------------------------- */

export async function submitTestimonial({

    code,

    rating,

    message,

}) {

    const response = await fetch(`${API}/submit`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            code,

            rating,

            message,

        }),

    });

    const result = await response.json();

    if (!response.ok) {

        throw new Error(result.message);

    }

    return result;
}

/* -------------------------
   Get All Testimonials
------------------------- */

export async function getTestimonials() {

    const response = await fetch(API);

    const result = await response.json();

    if (!response.ok) {

        throw new Error(result.message);

    }

    return result.data;
}

/* -------------------------
   Get Testimonials
   For One Project
------------------------- */

export async function getProjectTestimonials(slug) {

    const response = await fetch(

        `${API}/project/${slug}`

    );

    const result = await response.json();

    if (!response.ok) {

        throw new Error(result.message);

    }

    return result.data;
}

/* -------------------------
   Generate Review Code
   (Admin Only)
------------------------- */

export async function generateReviewCode({

    clientName,

    clientCompany,

    projectSlug,

    adminSecret,

}) {

    const response = await fetch(`${API}/generate`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "x-admin-secret": adminSecret,

        },

        body: JSON.stringify({

            clientName,

            clientCompany,

            projectSlug,

        }),

    });

    const result = await response.json();

    if (!response.ok) {

        throw new Error(result.message);

    }

    return result.data;
}

export const verifyCode = verifyReviewCode;