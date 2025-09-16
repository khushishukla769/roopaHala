import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../componets/CommonComponents/Input';
import CustomKeyboard from '../componets/CustomKeyboard/CustomKeyboard';
import GradientBgImage from "./GradientBgImage";
import { Fade } from "react-reveal";
import { AuthHeader } from "../componets/CommonComponents/AuthHeader";
import { AuthActionRow } from "../componets/CommonComponents/AuthActionRow";

export const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(56);
  const [rememberEmail, setRememberEmail] = useState(false);
  const focusableRefs = useRef([]);
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

  const navigate = useNavigate();

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

    const formOrder = [56, 57, 0, 1, 55, 58, 54];
    const bottomOrder = [47, 2, 3, 53];

    switch (e.key) {
      case "Backspace": {
        if (backButtonRef.current) {
          backButtonRef.current.click();
        } else {
          navigate(-1);
        }
        e.preventDefault();
        break;
      }
      case "ArrowLeft": {
        const firstKeys = [4, 14, 24, 34, 44, 47, 2];

        if (firstKeys.includes(focusedIndex)) {
          setFocusedIndex(59);
          e.preventDefault();
          break;
        }

        if (rowIndex !== -1 && colIndex > 0) {
          setFocusedIndex(keyboardGrid[rowIndex][colIndex - 1]);
        } else if (focusedIndex === 57) {
          setFocusedIndex(4);
        } else if (formOrder.includes(focusedIndex)) {
          setFocusedIndex(4);
        } else if (bottomOrder.includes(focusedIndex)) {
          const pos = bottomOrder.indexOf(focusedIndex);
          if (pos > 0) setFocusedIndex(bottomOrder[pos - 1]);
        }
        e.preventDefault();
        break;
      }

      case "ArrowRight":
        if (focusedIndex === 59) {
          setFocusedIndex(4);
          e.preventDefault();
          break;
        }

        if (rowIndex !== -1) {
          if (colIndex < keyboardGrid[rowIndex].length - 1) {
            setFocusedIndex(keyboardGrid[rowIndex][colIndex + 1]);
          } else {
            setFocusedIndex(56);
          }
        } else if (focusedIndex === 56) {
          setFocusedIndex(57);
        } else if (formOrder.includes(focusedIndex)) {
          const pos = formOrder.indexOf(focusedIndex);
          if (pos < formOrder.length - 1) {
            setFocusedIndex(formOrder[pos + 1]);
          }
        } else if (bottomOrder.includes(focusedIndex)) {
          const pos = bottomOrder.indexOf(focusedIndex);
          if (pos < bottomOrder.length - 1) setFocusedIndex(bottomOrder[pos + 1]);
        }
        e.preventDefault();
        break;

      case "ArrowDown":
        if (focusedIndex === 59) {
          setFocusedIndex(4);
          e.preventDefault();
          break;
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
        if (focusedIndex === 59) {
          setFocusedIndex(4);
          e.preventDefault();
          break;
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
    e.preventDefault();
    setLoader(true);

    console.log("Updating profile:", {
      firstName,
      lastName,
      email,
      phone,
      password
    });

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const handleKeyPress = (value) => {
    const char = isUpperCase && value.match(/[a-z]/) ? value.toUpperCase() : value;

    switch (activeInput) {
      case "firstName": setFirstName((prev) => prev + char); break;
      case "lastName": setLastName((prev) => prev + char); break;
      case "email": setEmail((prev) => prev + char); break;
      case "password": setPassword((prev) => prev + char); break;
      case "phone": setPhone((prev) => prev + char); break;
      default: break;
    }
  };

  const handleBackspace = () => {
    switch (activeInput) {
      case "firstName": setFirstName((prev) => prev.slice(0, -1)); break;
      case "lastName": setLastName((prev) => prev.slice(0, -1)); break;
      case "email": setEmail((prev) => prev.slice(0, -1)); break;
      case "password": setPassword((prev) => prev.slice(0, -1)); break;
      case "phone": setPhone((prev) => prev.slice(0, -1)); break;
      default: break;
    }
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
            Edit Your Profile
          </h1>
        </div>

        <div className="flex items-start justify-center">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">

            <div className="flex flex-col items-center space-y-1 sm:space-y-2 w-[650px] h-[498px] order-2 xl:order-1">
              <CustomKeyboard
                handleKeyPress={handleKeyPress}
                handleBackspace={handleBackspace}
                addEmailDomain={addEmailDomain}
                setIsUpperCase={setIsUpperCase}
                isUpperCase={isUpperCase}
                focusableRefs={focusableRefs}
              />

              <AuthActionRow
                ref={focusableRefs}
                loader={loader}
                rememberEmail={rememberEmail}
                setRememberEmail={setRememberEmail}
                onSubmit={handleSubmit}
                submitText={"Save"}
              />

            </div>

            <div className="rounded-xl w-[650px] order-1 xl:order-2">
              <div className="h-32 w-32 bg-white mb-10"></div>
              <form id="profile-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    value={firstName}
                    label="First Name"
                    active={activeInput === "firstName"}
                    onFocus={() => setActiveInput("firstName")}
                    inputRef={(el) => (focusableRefs.current[56] = el)}
                  />

                  <Input
                    value={lastName}
                    label="Last Name"
                    active={activeInput === "lastName"}
                    onFocus={() => setActiveInput("lastName")}
                    inputRef={(el) => (focusableRefs.current[57] = el)}
                  />
                </div>

                <Input
                  value={email}
                  label="Enter Email/mobile"
                  active={activeInput === "email"}
                  onFocus={() => setActiveInput("email")}
                  inputRef={(el) => (focusableRefs.current[0] = el)}
                />

                <Input
                  value={password}
                  label="Password"
                  type="password"
                  showPasswordToggle
                  active={activeInput === "password"}
                  onFocus={() => setActiveInput("password")}
                  inputRef={(el) => (focusableRefs.current[1] = el)}
                  eyeButtonRef={(el) => (focusableRefs.current[55] = el)}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                  value={phone}
                  label="Phone Number"
                  active={activeInput === "phone"}
                  onFocus={() => setActiveInput("phone")}
                  inputRef={(el) => (focusableRefs.current[58] = el)}
                />

                {ErrorMessage && (
                  <div className="bg-red-600 text-white p-3 rounded text-sm">
                    {ErrorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Fade>

    </GradientBgImage>
  );
};