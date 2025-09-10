import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavbarWithoutUser() {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const location = useLocation();

  const buttonRef = useRef(null);
  const privacyRef = useRef(null);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleRemoteKey = (e) => {
    switch (e.key) {
      case "Enter":
        if (document.activeElement === buttonRef.current) {
          buttonRef.current.click();
        } else if (document.activeElement === privacyRef.current) {
          privacyRef.current.click();
        }
        e.preventDefault();
        break;

      case "ArrowLeft":
        if (privacyRef.current && !hideLoginButton) {
          privacyRef.current.focus();
        }
        e.preventDefault();
        break;

      case "ArrowRight":
        if (buttonRef.current && !hideLoginButton) {
          buttonRef.current.focus();
        }
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    window.addEventListener("keydown", handleRemoteKey);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
      window.removeEventListener("keydown", handleRemoteKey);
    };
  }, []);

  useEffect(() => {
    if (!hideLoginButton) {
      // Default: focus Sign In first
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  }, [location.pathname]);

  const hideLoginButton =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/privacyPolicy";

  return (
    <footer className="fixed bottom-0 z-50 w-full flex items-center justify-between px-28 py-10 text-white transition duration-500 ease-in-out">
      {!hideLoginButton && (
        <span
          ref={privacyRef}
          onClick={() => navigate("/privacyPolicy")}
          className="cursor-pointer text-sm decoration-orange-500 underline-offset-4
                   hover:underline hover:decoration-orange-500 hover:decoration-2
                   focus:underline focus:decoration-orange-500 focus:decoration-2 focus:outline-none"
          tabIndex={0}
        >
          Privacy Policy
        </span>
      )}

      {!hideLoginButton && (
        <Link to="/signin">
          <button
            ref={buttonRef}
            className="w-28 sm:w-32 bg-white h-14 sm:h-12 rounded-xl text-black font-bold transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500"
            tabIndex={0}
          >
            Sign In
          </button>
        </Link>
      )}
    </footer>
  );
}

export default NavbarWithoutUser;