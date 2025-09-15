import { Fade } from "react-reveal";
import GradientBgImage from "../GradientBgImage";
import { AuthHeader } from "../../componets/CommonComponents/AuthHeader";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SubscribeCards } from "./SubscribeCards";

export const SubscribePage = () => {
  const backButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === "Enter") {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (backButtonRef.current) {
      backButtonRef.current.focus();
    }
  }, []);

  const handleRemoteKey = (e) => {
    if (e.key === "Backspace") {
      if (backButtonRef.current) {
        backButtonRef.current.click();
      } else {
        navigate(-1);
      }
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleRemoteKey);
    return () => window.removeEventListener("keydown", handleRemoteKey);
  }, []);

  return (
    <GradientBgImage>
      <Fade>
        <div className="p-10">
          <AuthHeader
            backButtonRef={backButtonRef}
            onBackClick={() => navigate(-1)}
            onKeyDown={handleKey}
            showText={false}
          />
        </div>
        <div className="flex justify-center mb-20">
          <h1 className="text-4xl sm:text-4xl font-bold text-center text-white mt-4 sm:mt-6 px-4">
            Choose A Plan Which Suits You the Best
          </h1>
        </div>
        <SubscribeCards />
      </Fade>
    </GradientBgImage>
  );
};