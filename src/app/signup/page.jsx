"use client";
import React from "react";

const submit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  console.log(name, email, password);
};

const signup = () => {
  return (
    <div>
      <main className="signupmain">
        <section className="headingSignUP">
          <center>QuackDocs</center>
        </section>
        <form action="post">
          <input type="text" name="" placeholder="Enter your name" id="name" />
          <br />
          <input
            type="text"
            name=""
            id="email"
            placeholder="Enter your email"
          />{" "}
          <br />
          <input
            type="password"
            name=""
            id="password"
            placeholder="Enter your password"
          />{" "}
          <br />
          <button type="button" onSubmit={submit}>
            Submit
          </button>
          <br />
          <a href="/login">
            <button type="button">Login</button>
          </a>
        </form>
      </main>
    </div>
  );
};

export default signup;
