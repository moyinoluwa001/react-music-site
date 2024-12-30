import React from "react";

function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
