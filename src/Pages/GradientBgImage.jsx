// GradientBgImage.jsx
import React from "react";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

const GradientBgImage = ({ children, className = "" }) => {
  return (
    <div
      className={`relative min-h-screen w-full ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(55.43deg, rgba(0, 0, 0, 0.16) 73.58%, rgba(242, 72, 19, 0.16) 99.17%, rgba(255, 131, 34, 0.16) 105.02%),
          linear-gradient(299.64deg, rgba(0, 0, 0, 0.16) 31.87%, rgba(242, 72, 19, 0.16) 89.04%, rgba(255, 131, 34, 0.16) 100%),
          url(${WelcomePageBanner})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default GradientBgImage;