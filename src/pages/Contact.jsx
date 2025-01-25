import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_bjs9wuw";
    const templateId = "template_dldxofr";
    const publicKey = "FYlH0HwjAfPSGlsGy";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Nitin Kumar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error in sending email.", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
