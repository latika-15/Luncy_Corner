export async function getTestimonials() {

    const response = await fetch(API);

    const result = await response.json();

    if (!response.ok) {

        throw new Error(result.message);

    }

    return result.data;

}