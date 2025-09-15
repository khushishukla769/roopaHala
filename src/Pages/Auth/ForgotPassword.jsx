import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { ClipLoader } from "react-spinners";
import GradientBgImage from "../GradientBgImage";
import CustomKeyboard from "../../componets/CustomKeyboard/CustomKeyboard";
import Input from "../../componets/CommonComponents/Input";
import AuthHelpText from "../../componets/CommonComponents/HelpText";

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

    const firstKeys = [4, 14, 24, 34, 44, 47, 2];

    const formOrder = [0, 1, 55, 54];
    const bottomOrder = [47, 2, 3, 53];

    switch (e.key) {
      case "ArrowRight":
        if (rowIndex !== -1) {
          if (colIndex < keyboardGrid[rowIndex].length - 1) {
            setFocusedIndex(keyboardGrid[rowIndex][colIndex + 1]);
          } else {
            setFocusedIndex(0);
          }
        } else if (bottomOrder.includes(focusedIndex)) {
          const pos = bottomOrder.indexOf(focusedIndex);
          if (pos < bottomOrder.length - 1) {
            setFocusedIndex(bottomOrder[pos + 1]);
          } else {
            setFocusedIndex(0);
          }
        } else if (focusedIndex === 56) {
          setFocusedIndex(4);
        }
        e.preventDefault();
        break;

      case "ArrowLeft":
        if (firstKeys.includes(focusedIndex)) {
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
    <GradientBgImage>
      <h2 className="text-4xl sm:text-4xl font-bold text-center text-white mt-4 sm:mt-6 px-4">Forgot Password</h2>

      <Fade>
        <div className="flex flex-col xl:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 p-3 sm:p-6 mt-28">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2 w-[650px] h-[498px] order-2 xl:order-1">
            <CustomKeyboard
              handleKeyPress={handleKeyPress}
              handleBackspace={handleBackspace}
              addEmailDomain={addEmailDomain}
              setIsUpperCase={setIsUpperCase}
              isUpperCase={isUpperCase}
              focusableRefs={focusableRefs}
            />
            <div className="flex justify-start items-start w-full mt-20">
              <button ref={(el) => (focusableRefs.current[2] = el)} type="submit" onClick={handleSubmit}
                className="w-[235px] h-16 bg-orange rounded-xl text-common text-[24px]
        leading-[100%] tracking-[0] text-center transition-colors flex
        items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)]"
              >
                {loader ? <ClipLoader color="#fff" size={20} /> : "Submit Email"}
              </button>
            </div>
          </div>

          <div className="bg-opacity-60 w-[650px] h-[498px] rounded-xl order-1 xl:order-2 relative p-6">
            <p className="mb-8 text-white">
              Forget your Password? Hassel not, we have got your back. Just enter your email we will send a password reset link to it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                value={email}
                placeholder="appuser@roopahala.co"
                active={activeInput === "email"}
                onFocus={() => setActiveInput("email")}
                inputRef={(el) => (focusableRefs.current[0] = el)}
              />

              {ErrorMessage && (
                <div className="bg-red-600 text-white p-3 rounded text-sm">{ErrorMessage}</div>
              )}
            </form>

            <AuthHelpText />
          </div>

        </div>
      </Fade>
    </GradientBgImage>
  );
}
