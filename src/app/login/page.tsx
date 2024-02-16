import React from "react";

export default function LoginPage() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <h2>Login Page</h2>
      <button>
        <a href="/api/auth/login">Click here to Login</a>
      </button>
    </div>
  );
}
