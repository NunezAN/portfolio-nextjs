import React, { useRef, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

type Props = {};

export default function Contact({}: Props) {
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_ayx2rku",
        "template_1kuz27w",
        currentForm,
        "CwS1CqbLvvLsQJ2RP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Currently open to new opportunities,{" "}
          <span className="underline decoration-[#7289da]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7289da] h-7 w-7 animate-pulse" />
            <p className="text-2xl">nunez101alexis@gmail.com</p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-[300px] md:w-fit mx-auto px-[12px]"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <input
              name="user_name"
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="user_email"
              placeholder="E-mail"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className={`${
              sent ? `bg-[#71BC68]` : `bg-[#7289da]`
            } py-5 px=10 rounded-md text-black font-bold text-lg`}
          >
            {sent ? "Sent" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
