import WelcomePageBanner from "../images/WelcomePageBanner.jpg";
import { useNavigate } from "react-router-dom";
import GradientBgImage from "./GradientBgImage";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <GradientBgImage>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start sm:self-start flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors mb-6"
      >
        <span className="text-xl text-orange-500">←</span>
      </button>

      {/* Page Title */}
      <p className="mt-20 text-2xl sm:text-3xl font-semibold mb-8 text-left font-sans text-white">
        Privacy Policy
      </p>

      {/* Content */}
      <div className="max-w-4xl w-full text-left break-words font-sans font-normal text-base leading-[1.6]">
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
    </GradientBgImage>
  );
};

export default PrivacyPolicy;
