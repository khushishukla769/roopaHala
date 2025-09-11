import { useNavigate } from "react-router-dom";
import GradientBgImage from "./GradientBgImage";
import { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (backButtonRef.current) {
      backButtonRef.current.focus();
    }
  }, []);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      navigate(-1);
    }
  }

  return (
    <GradientBgImage>
      <div className="w-full px-6 py-6 flex flex-col items-start">
        <button
          onKeyDown={handleKey}
          ref={backButtonRef}
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors h-14 w-14"
        >
          <span className="text-xl text-orange"><FaArrowLeft /></span>
        </button>

        <div className="w-full flex flex-col justify-center items-center">
          <p className="mt-20 text-4xl sm:text-4xl font-semibold mb-8 text-left font-museo text-white">
            Privacy Policy
          </p>

          <div className="max-w-4xl w-full text-left break-words font-museo leading-[1.6] text-white text-lg">
            <p className="mb-4">
              Evoke Digital Australia PTY Ltd is committed to protecting your privacy. We understand the
              significance of privacy and treat personal information with respect and integrity. This Privacy Policy outlines how we handle user information collected through Roopa Hala and applies to both
              current and former users of our Product. By engaging with our Products, you consent to the practices
              described in this policy.
            </p>

            <p className="mb-4">
              This policy ensures the fair, sensitive, and secure handling of user information, in compliance with relevant legal standards.
              It applies specifically to users of roopahala.com.au, including any associated mobile sites and services as detailed in our terms of
              use. We encourage users to read both this privacy policy and the terms of use carefully.
            </p>

            <p className="mb-4">
              Personal information is primarily collected during the registration process or when users interact
              with our website & App, consistent with International legal standards. By utilizing Roopa Hala's
              services, users agree to the collection, storage, processing, and transfer of personal information as outlined
              in both this privacy policy and the terms and conditions.
            </p>

            <p className="mb-4">
              Personal information is primarily collected during the registration process or when users interact
              with our website & App, consistent with International legal standards. By utilizing Roopa Hala's
              services, users agree to the collection, storage, processing, and transfer of personal information as outlined
              in both this privacy policy and the terms and conditions. Personal information is primarily collected during the registration process or when users interact
              with our website & App, consistent with International legal standards. By utilizing Roopa Hala's
              services, users agree to the collection, storage, processing, and transfer of personal information as outlined
              in both this privacy policy and the terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </GradientBgImage>
  );
};

export default PrivacyPolicy;
