"use client";
import React, { useState } from "react";

const Refer: React.FC = () => {
  const [referrerCode, setReferralCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (referrerCode.length > 6) {
      setError("Referral code cannot be more than 6 characters");
      return;
    }

    try {
      console.log(localStorage.getItem("token"));
      const response = await fetch("http://localhost:3000/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ referrerCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "An error occurred");
      } else {
        setSuccess(`an email has been sent to ${data.userEmail} !!`);
        console.log(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        // router.push('/')
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 shadow-lg rounded-lg space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-gray-900">Referrals</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="referralCode"
                className="block text-sm font-medium text-gray-700"
              >
                Referral Code
              </label>
              <input
                id="referralCode"
                name="referralCode"
                type="text"
                value={referrerCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className=" w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Referral Code"
                maxLength={6}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              claim referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Refer;
