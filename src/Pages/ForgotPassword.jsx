import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { ClipLoader } from "react-spinners";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const focusableRefs = useRef([]);

  const keyboardGrid = [
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [34, 36, 37, 38, 39, 40, 41, 42, 43],
    [44, 45, 46],
    [47, 48, 49, 50, 51, 52],
  ];

  useEffect(() => {
    if (focusableRefs.current[focusedIndex]) {
      focusableRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  const handleRemoteKey = (e) => {
    let rowIndex = keyboardGrid.findIndex(row => row.includes(focusedIndex));
    let colIndex = rowIndex !== -1 ? keyboardGrid[rowIndex].indexOf(focusedIndex) : -1;

    // First key in each row → should send Left to Back (56)
    const firstKeys = [4, 14, 24, 34, 44, 47, 2];

    const formOrder = [0, 1, 55, 54];
    const bottomOrder = [47, 2, 3, 53];

    switch (e.key) {
      case "ArrowRight":
        if (rowIndex !== -1) {
          if (colIndex < keyboardGrid[rowIndex].length - 1) {
            setFocusedIndex(keyboardGrid[rowIndex][colIndex + 1]);
          } else {
            setFocusedIndex(0); // wrap to email input
          }
        } else if (bottomOrder.includes(focusedIndex)) {
          const pos = bottomOrder.indexOf(focusedIndex);
          if (pos < bottomOrder.length - 1) {
            setFocusedIndex(bottomOrder[pos + 1]);
          } else {
            setFocusedIndex(0);
          }
        } else if (focusedIndex === 56) {
          // Back → jump into keyboard "1"
          setFocusedIndex(4);
        }
        e.preventDefault();
        break;

      case "ArrowLeft":
        if (firstKeys.includes(focusedIndex)) {
          // any first-column key or Submit Email → Back button
          setFocusedIndex(56);
        } else if (rowIndex !== -1) {
          if (colIndex > 0) {
            setFocusedIndex(keyboardGrid[rowIndex][colIndex - 1]);
          }
        } else if (formOrder.includes(focusedIndex)) {
          setFocusedIndex(4);
        } else if (bottomOrder.includes(focusedIndex)) {
          const pos = bottomOrder.indexOf(focusedIndex);
          if (pos > 0) {
            setFocusedIndex(bottomOrder[pos - 1]);
          } else {
            setFocusedIndex(56);
          }
        }
        e.preventDefault();
        break;

      case "ArrowDown":
        if (focusedIndex === 56) {
          // Back → jump into keyboard "1"
          setFocusedIndex(4);
        }
        if (rowIndex !== -1) {
          if (focusedIndex === 47) {
            setFocusedIndex(2);
          } else if (focusedIndex === 48) {
            setFocusedIndex(3);
          } else if (focusedIndex === 49) {
            setFocusedIndex(53);
          } else if (rowIndex < keyboardGrid.length - 1) {
            const nextIndex =
              keyboardGrid[rowIndex + 1][
              Math.min(colIndex, keyboardGrid[rowIndex + 1].length - 1)
              ];
            setFocusedIndex(nextIndex);
          }
        } else if (formOrder.includes(focusedIndex)) {
          const pos = formOrder.indexOf(focusedIndex);
          if (pos < formOrder.length - 1) {
            setFocusedIndex(formOrder[pos + 1]);
          }
        }
        e.preventDefault();
        break;

      case "ArrowUp":
        if (focusedIndex === 56) {
          // Back → jump into keyboard "1"
          setFocusedIndex(4);
        }
        if (rowIndex !== -1) {
          if (rowIndex > 0) {
            const prevIndex =
              keyboardGrid[rowIndex - 1][
              Math.min(colIndex, keyboardGrid[rowIndex - 1].length - 1)
              ];
            setFocusedIndex(prevIndex);
          }
        } else if (formOrder.includes(focusedIndex)) {
          const pos = formOrder.indexOf(focusedIndex);
          if (pos > 0) {
            setFocusedIndex(formOrder[pos - 1]);
          }
        } else if (bottomOrder.includes(focusedIndex)) {
          if (focusedIndex === 2) setFocusedIndex(47);
          else if (focusedIndex === 3) setFocusedIndex(48);
          else if (focusedIndex === 53) setFocusedIndex(49);
        }
        e.preventDefault();
        break;

      case "Enter":
        focusableRefs.current[focusedIndex]?.click();
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleRemoteKey);
    return () => window.removeEventListener("keydown", handleRemoteKey);
  }, [focusedIndex]);

  const handleSubmit = (e) => {

  };

  const handleKeyPress = (value) => {
    const char = isUpperCase && value.match(/[a-z]/) ? value.toUpperCase() : value;
    if (activeInput === "email") setEmail((prev) => prev + char);
  };

  const handleBackspace = () => {
    if (activeInput === "email") setEmail((prev) => prev.slice(0, -1));
  };

  const addEmailDomain = (domain) => {
    if (activeInput === "email") {
      let currentEmail = email;
      const atIndex = currentEmail.indexOf("@");
      if (atIndex !== -1) currentEmail = currentEmail.substring(0, atIndex);
      setEmail(currentEmail + domain);
    }
  };

  return (
    <section
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage: `url(${WelcomePageBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-5 bg-black bg-opacity-50 gap-3 sm:gap-0">
        <button
          ref={(el) => (focusableRefs.current[56] = el)}
          onClick={() => navigate(-1)}
          className="self-start sm:self-center flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
        >
          <span className="text-xl text-orange-500">←</span>
        </button>

        <div className="flex-1 sm:ml-5 text-center sm:text-left">
          <h1 className="text-base sm:text-lg font-semibold">Sign-In to your Roopa Hala Account</h1>
          <p className="text-xs sm:text-sm opacity-80">Sri Lanka's Premier & Largest Sinhala Movie Platform</p>
        </div>

      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-4 sm:mt-6 px-4">Forgot Password</h2>

      <Fade>
        <div className="flex flex-col xl:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 p-3 sm:p-6 mt-28">
          <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 w-full max-w-[500px] xl:max-w-[600px] order-2 xl:order-1">
            <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
              {"1234567890".split("").map((num, idx) => (
                <button
                  key={num}
                  ref={(el) => (focusableRefs.current[4 + idx] = el)}
                  onClick={() => handleKeyPress(num)}
                  className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
              {"qwertyuiop".split("").map((letter, idx) => (
                <button
                  key={letter}
                  ref={(el) => (focusableRefs.current[14 + idx] = el)}
                  onClick={() => handleKeyPress(letter)}
                  className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
                >
                  {letter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
              {"asdfghjkl".split("").map((letter, idx) => (
                <button
                  key={letter}
                  ref={(el) => (focusableRefs.current[24 + idx] = el)}
                  onClick={() => handleKeyPress(letter)}
                  className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
                >
                  {letter}
                </button>
              ))}
              <button
                ref={(el) => (focusableRefs.current[33] = el)}
                onClick={() => handleKeyPress("-")}
                className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
              >
                -
              </button>
            </div>

            <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
              <button
                ref={(el) => (focusableRefs.current[34] = el)}
                onClick={() => setIsUpperCase(!isUpperCase)}
                className={`col-span-2 h-8 sm:h-10 lg:h-11 w-full rounded text-white text-xs sm:text-sm ${isUpperCase ? "bg-orange-600" : "bg-neutral-800"}`}
              >
                ↑
              </button>
              {"zxcvbnm".split("").map((letter, idx) => (
                <button
                  key={letter}
                  ref={(el) => (focusableRefs.current[36 + idx] = el)}
                  onClick={() => handleKeyPress(letter)}
                  className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
                >
                  {letter}
                </button>
              ))}
              <button
                ref={(el) => (focusableRefs.current[43] = el)}
                onClick={() => handleKeyPress("-")}
                className="h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm"
              >
                -
              </button>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
              {["@hotmail.com", "@gmail.com", "@yahoo.com"].map((domain, idx) => (
                <button
                  key={domain}
                  ref={(el) => (focusableRefs.current[44 + idx] = el)}
                  onClick={() => addEmailDomain(domain)}
                  className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs"
                >
                  {domain}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-6 gap-1 sm:gap-2 w-full">
              <button
                ref={(el) => (focusableRefs.current[47] = el)}
                className="h-8 sm:h-10 lg:h-11 bg-white text-black rounded text-xs sm:text-sm"
              >
                Next
              </button>
              <button
                ref={(el) => (focusableRefs.current[48] = el)}
                onClick={() => handleKeyPress("!#$")}
                className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm"
              >
                !#$
              </button>
              <button
                ref={(el) => (focusableRefs.current[49] = el)}
                onClick={() => handleKeyPress("@")}
                className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm"
              >
                @
              </button>
              <button
                ref={(el) => (focusableRefs.current[50] = el)}
                onClick={() => handleKeyPress(".")}
                className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm"
              >
                .
              </button>
              <button
                ref={(el) => (focusableRefs.current[51] = el)}
                onClick={() => handleKeyPress(".com")}
                className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm"
              >
                .com
              </button>
              <button
                ref={(el) => (focusableRefs.current[52] = el)}
                onClick={handleBackspace}
                className="h-8 sm:h-10 lg:h-11 bg-white text-black rounded text-xs sm:text-sm"
              >
                ⌫
              </button>
            </div>
            <div className="flex justify-start items-start w-full mt-20">
              <button ref={(el) => (focusableRefs.current[2] = el)} type="submit" onClick={handleSubmit} className="w-full sm:w-32 bg-orange-600 h-10 sm:h-12 rounded-xl text-white font-bold transition-colors flex items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)]">
                {loader ? <ClipLoader color="#fff" size={20} /> : "Submit Email"}
              </button>
            </div>
          </div>

          <div className="bg-opacity-60 rounded-xl max-w-md w-full order-1 xl:order-2">
            <p className="mb-8">Forget your Password? Hassel not, we have got your back. Just enter your email we will send a password reset link to it.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div
                ref={(el) => (focusableRefs.current[0] = el)}
                tabIndex={0}
                onFocus={() => setActiveInput("email")}
                className={`w-full bg-black border rounded px-4 py-3 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${activeInput === "email"
                  ? "border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]"
                  : "border-gray-700"
                  }`}
              >
                {email || "appuser@roopahala.co"}
              </div>

              {ErrorMessage && (
                <div className="bg-red-600 text-white p-3 rounded text-sm">{ErrorMessage}</div>
              )}
            </form>

            <div className="text-center sm:text-right mt-5 sm:mt-20">
              <p className="text-white text-sm">Need Help Signing In?</p>
              <p className="text-white font-bold text-sm">Visit Roopahala.com</p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
