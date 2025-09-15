import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavbarWithoutUser() {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const location = useLocation();

  const signInRef = useRef(null);
  const privacyRef = useRef(null);
  const getStartedRef = useRef(null);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const hideLoginButton =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/privacyPolicy";

  const handleRemoteKey = (e) => {
    switch (e.key) {
      case "Enter":
        if (document.activeElement === signInRef.current) {
          signInRef.current.click();
        } else if (document.activeElement === privacyRef.current) {
          privacyRef.current.click();
        } else if (document.activeElement === getStartedRef.current) {
          getStartedRef.current.click();
        }
        e.preventDefault();
        break;

      case "ArrowLeft":
        if (document.activeElement === getStartedRef.current) {
          signInRef.current?.focus();
        } else if (document.activeElement === signInRef.current) {
          privacyRef.current?.focus();
        }
        e.preventDefault();
        break;

      case "ArrowRight":
        if (document.activeElement === privacyRef.current) {
          signInRef.current?.focus();
        } else if (document.activeElement === signInRef.current) {
          getStartedRef.current?.focus();
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
      signInRef.current?.focus();
    }
  }, [location.pathname]);

  return (
    <footer className="fixed bottom-0 z-50 w-full flex items-center justify-between px-28 py-10 text-white transition duration-500 ease-in-out">
      {!hideLoginButton && (
        <span
          ref={privacyRef}
          onClick={() => navigate("/privacyPolicy")}
          className="cursor-pointer text-[20px] font-semibold text-center align-middle
             decoration-transparent underline-offset-[25%] font-museo
             focus:underline focus:decoration-orange focus:decoration-2 focus:outline-none"
          tabIndex={0}
        >
          Privacy Policy
        </span>
      )}

      {!hideLoginButton && (
        <div className="flex gap-4 items-end">
          <button
            ref={signInRef}
            className="w-28 sm:w-28 bg-white h-14 sm:h-14 rounded-xl text-black font-bold text-xl font-museo
            transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange"
            tabIndex={0}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>

          <button
            ref={getStartedRef}
            className="w-[198px] bg-orange h-16 sm:h-16 rounded-xl  font-bold transition-colors flex items-center text-common
             justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)] focus:outline-none focus:ring-2 focus:ring-orange text-2xl"
            tabIndex={0}
          >
            Get Started
          </button>
        </div>
      )}
    </footer>
  );
}

export default NavbarWithoutUser;