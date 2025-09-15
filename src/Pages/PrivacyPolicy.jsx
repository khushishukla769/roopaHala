import { useNavigate } from "react-router-dom";
import GradientBgImage from "./GradientBgImage";
import { useEffect, useRef } from "react";
import { AuthHeader } from "../componets/CommonComponents/AuthHeader";

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
      <div className="w-full h-screen flex flex-col px-6 py-6">
        <div className="w-full relative">

          <AuthHeader
            backButtonRef={backButtonRef}
            onBackClick={() => navigate(-1)}
            onKeyDown={handleKey}
            showText={false}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="max-w-4xl w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-4xl  mb-8 text-left text-common">
              Privacy Policy
            </h1>

            <div className="text-left break-words font-museo leading-[1.6] text-white text-lg">
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

      </div>
    </GradientBgImage>
  );
};

export default PrivacyPolicy;
