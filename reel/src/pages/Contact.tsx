import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../services/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    dispatch(addMessage(formData));

    alert("message sent successfully");
    // clear form

    setFormData({
      fullname: "",
      email: "",
      contact: "",
      message: "",
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="full name"
            type="text"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="email address"
            type="email"
          />
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="contact"
            type="number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="write your message here..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
