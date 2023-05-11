import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="bg-brand-primary drop-shadow-lg w-96 h-96 mx-auto my-20 md:my-36 pt-2 flex flex-col text-center text-white rounded-lg">
      <h1 className="text-5xl font-bold my-2">sign in</h1>
      <p>
        don't have an account already? <Link to="/signup">create one</Link>
      </p>

      <form className="flex flex-co">
        <input
          className="rounded-lg drop-shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-lg shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-white">
          forgot your password? <span>reset it</span>
        </p>

        <button
          className="bg-white w-2/5 mx-auto my-4 py-2 rounded-lg drop-shadow-lg font-bold text-xl transition-all"
          onClick={(e) => signUserIn(e)}
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
