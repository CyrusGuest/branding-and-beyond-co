import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [content, setContent] = useState("");

  const submitMessage = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://api.brandingandbeyond.org/api/v1/create-message",
      {
        email,
        subject,
        content,
      }
    );

    console.log(res);

    setEmail("");
    setSubject("");
    setContent("");
  };

  return (
    <div className="gradient-background drop-shadow-lg w-2/3 md:w-1/2 mx-auto my-20 pt-2 flex flex-col text-center text-white rounded-lg">
      <h1 className="text-5xl font-bold my-2">contact us</h1>
      <p className="text-xl">we'll get back to you within one business day.</p>

      <form className="flex flex-col">
        <input
          className="rounded-lg drop-shadow-lg text-black text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-lg text-black shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="text"
          id="subject"
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="rounded-lg text-black shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="text"
          rows="5"
          id="content"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-white w-2/5 mx-auto my-8 glow-on-hover-transparent py-2 rounded-lg drop-shadow-lg font-bold text-xl transition-all"
          onClick={(e) => submitMessage(e)}
        >
          <span className="gradient-text">send</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
