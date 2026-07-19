import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/contact`;

export const sendContact = async (formData) => {
  const { data } = await axios.post(API_URL, formData);
  return data;
};