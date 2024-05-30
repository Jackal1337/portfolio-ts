"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Kontakt");
  const [formData, setFormData] = useState({ senderEmail: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("senderEmail", formData.senderEmail);
    formDataToSend.append("message", formData.message);

    const { data, error } = await sendEmail(formDataToSend);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email byl úspěšně odeslán!");
    setFormData({ senderEmail: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Kontakt</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Kontaktovat mě můžeš napřímo na {" "}
        <a className="underline" href="mailto:admin@jackal.studio">
        admin@jackal.studio,
        </a>{" "}
        nebo můžeš použít formulář níže.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          value={formData.senderEmail}
          onChange={handleChange}
          placeholder="Tvůj email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Tvá zpráva"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
