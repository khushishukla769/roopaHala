import React from 'react'
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${WelcomePageBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="self-start sm:self-center flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
      >
        <span className="text-xl text-orange-500">←</span>
      </button>
      <p>ejhfgryu</p>
    </section>
  )
}

export default PrivacyPolicy