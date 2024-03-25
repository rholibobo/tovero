"use client";

import { useState, useRef } from "react";
import CustomButton from "../button/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_emjbf9w", "template_5wgab8b", form.current, {
        publicKey: "KwpzaOFfz04ncoXME",
      })
      .then(
        () => {
          console.log(form.current);
          console.log("SUCCESS!");
          toast.success("Email sent Successfully!");
          const formElements = form.current.elements;
          for (let i = 0; i < formElements.length; i++) {
            if (
              formElements[i].nodeName === "INPUT" ||
              formElements[i].nodeName === "TEXTAREA"
            ) {
              formElements[i].value = "";
            }
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-[55%]  py-4 px-4 bxshadow">
      <h1 className="text-2xl font-header font-extrabold text-redtext">
        Get In Touch
      </h1>
      <br />
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-8">
          <label htmlFor="fullName" className="mb-4 text-border">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="John Doe"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="phoneNumber" className="mb-4 text-border">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="+1 (0)27174657687"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="mb-4 text-border">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext"
            placeholder="johndoe@email.com"
            required=""
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="mb-4 text-border">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border outline-0 font-semibold rounded-lg w-full p-2.5 focus:border-prigreentext focus:ring-1 focus:ring-prigreentext resize-none min-h-48"
            placeholder="type your message"
            required=""
          />
        </div>
        <button
          type="submit"
          className="py-2.5 px-6 rounded-[20px] font-bold bg-btn text-white text-[14px] w-full"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
