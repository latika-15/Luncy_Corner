const API_URL=`${import.meta.env.VITE_API_URL}/projects`;

export const getProjects = async () => {

    const response = await fetch(API_URL);

    if(!response.ok){

        throw new Error("Failed to fetch projects");

    }

    const result = await response.json();

    return result.data;

}