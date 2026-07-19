import { useState } from "react";
import { sendContact } from "../services/contactService";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function useContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await sendContact(formData);

      setSuccess(true);
      setFormData(initialState);

    } catch (err) {

      if (err.response?.data?.errors) {
        setError(
          err.response.data.errors
            .map((error) => error.msg)
            .join(", ")
        );
      } else {
        setError(
          err.response?.data?.message ||
          "Something went wrong."
        );
      }

    } finally {
      setLoading(false);
    }
  };

const resetForm = () => {
  setFormData(initialState);
  setSuccess(false);
  setError("");
};

return {
  formData,
  loading,
  success,
  error,
  handleChange,
  handleSubmit,
  resetForm,
};
}