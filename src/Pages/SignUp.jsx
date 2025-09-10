// import React from "react";
// import { useState, useContext } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { Fade } from "react-reveal";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../Firebase/FirebaseConfig";
// import { AuthContext } from "../Context/UserContext";
// import { ClipLoader } from "react-spinners";
// import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

// function SignUp() {
//   const { User, setUser } = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [ErrorMessage, setErrorMessage] = useState("");
//   const [loader, setLoader] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         onAuthStateChanged(auth, (user) => {
//           const EmptyArray = [];
//           setDoc(doc(db, "Users", user.uid), {
//             email: email,
//             Uid: user.uid,
//           }).then(() => {
//             setDoc(
//               doc(db, "MyList", user.uid),
//               {
//                 movies: EmptyArray,
//               },
//               { merge: true }
//             ).then(() => {
//               setDoc(
//                 doc(db, "WatchedMovies", user.uid),
//                 {
//                   movies: EmptyArray,
//                 },
//                 { merge: true }
//               );
//               setDoc(
//                 doc(db, "LikedMovies", user.uid),
//                 {
//                   movies: EmptyArray,
//                 },
//                 { merge: true }
//               );
//             });
//           });
//         });

//         const user = userCredential.user;
//         if (user != null) {
//           navigate("/");
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setLoader(false);
//         setErrorMessage(errorMessage);
//         console.log(errorCode);
//         console.log(errorMessage);
//       });
//   };

//   return (
//     <section
//       className="h-[100vh] bg-gray-500"
//       style={{
//         background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
//       }}
//     >
//       <div className="h-[100vh] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-[#000000a2] rounded-lg shadow sm:my-0 md:mt-0 sm:max-w-lg xl:p-0 border-2 border-stone-800 lg:border-0">
//           <Fade>
//             <div>
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-12">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
//                   Create a new account
//                 </h1>
//                 <h1 className="text-white text-2xl p-3 text-center border-2 border-red-700 rounded-sm">
//                   Not Real Netflix
//                 </h1>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-4 md:space-y-6"
//                   action="#"
//                 >
//                   <div>
//                     <label
//                       for="email"
//                       className="block mb-2 text-sm font-medium text-white dark:text-white"
//                     >
//                       Your email
//                     </label>
//                     <input
//                       onChange={(e) => setEmail(e.target.value)}
//                       type="email"
//                       name="email"
//                       id="email"
//                       className={
//                         ErrorMessage
//                           ? "bg-stone-700 text-white sm:text-sm rounded-sm border-2 border-red-700 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white "
//                           : "bg-stone-700 text-white sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white "
//                       }
//                       placeholder="name@emil.com"
//                       required=""
//                     ></input>
//                   </div>
//                   <div>
//                     <label
//                       for="password"
//                       className="block mb-2 text-sm font-medium text-white dark:text-white"
//                     >
//                       Password
//                     </label>
//                     <input
//                       onChange={(e) => setPassword(e.target.value)}
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className={
//                         ErrorMessage
//                           ? "bg-stone-700 text-white sm:text-sm rounded-sm border-2 border-red-700 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                           : "bg-stone-700 text-white sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white"
//                       }
//                       required=""
//                     ></input>
//                   </div>
//                   <div>
//                     {ErrorMessage && (
//                       <h1 className="flex text-white font-bold p-4 bg-red-700 rounded text-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-6 h-6 mr-1"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
//                           />
//                         </svg>

//                         {ErrorMessage}
//                       </h1>
//                     )}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-start">
//                       <div className="flex items-center h-5">
//                         <input
//                           id="remember"
//                           aria-describedby="remember"
//                           type="checkbox"
//                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
//                           required=""
//                         ></input>
//                       </div>
//                       <div className="ml-3 text-sm">
//                         <label for="remember" className="text-gray-500">
//                           Remember me
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className={`w-full text-white ${loader
//                         ? `bg-stone-700`
//                         : `bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300`
//                       } font-medium rounded-sm text-sm px-5 py-2.5 text-center`}
//                   >
//                     {loader ? <ClipLoader color="#ff0000" /> : "Create now"}
//                   </button>
//                   <p className="text-sm font-light text-gray-500">
//                     Already have one?{" "}
//                     <Link
//                       className="font-medium text-white hover:underline"
//                       to={"/signin"}
//                     >
//                       Sign in
//                     </Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </Fade>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignUp;

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { ClipLoader } from "react-spinners";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [rememberEmail, setRememberEmail] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Changed initial focus to first name field (index 56)
  const [focusedIndex, setFocusedIndex] = useState(56);
  const focusableRefs = useRef([]);

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
          setFocusedIndex(56);
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

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onAuthStateChanged(auth, (user) => {
          const EmptyArray = [];
          setDoc(doc(db, "Users", user.uid), {
            email,
            Uid: user.uid,
            firstName,
            lastName,
            phone,
          }).then(() => {
            setDoc(doc(db, "MyList", user.uid), { movies: EmptyArray }, { merge: true });
            setDoc(doc(db, "WatchedMovies", user.uid), { movies: EmptyArray }, { merge: true });
            setDoc(doc(db, "LikedMovies", user.uid), { movies: EmptyArray }, { merge: true });
          });
        });

        const user = userCredential.user;
        if (user) navigate("/");
      })
      .catch((error) => {
        setLoader(false);
        setErrorMessage(error.message);
      });
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
    <section
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${WelcomePageBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-5 bg-black bg-opacity-50 gap-3 sm:gap-0">
        <button
          ref={(el) => (focusableRefs.current[59] = el)}
          onClick={() => navigate(-1)}
          className="self-start sm:self-center flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
        >
          <span className="text-xl text-orange-500">←</span>
        </button>

        <div className="flex-1 sm:ml-5 text-center sm:text-left">
          <h1 className="text-base sm:text-lg font-semibold">Sign-up to your Roopa Hala Account</h1>
          <p className="text-xs sm:text-sm opacity-80">Sri Lanka's Premier & Largest Sinhala Movie Platform</p>
        </div>

      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-4 sm:mt-6 px-4">Register New User</h2>

      <Fade>
        <div className="flex flex-col xl:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 p-3 sm:p-6">
          <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 w-full max-w-[500px] xl:max-w-[600px] mt-4 sm:mt-8 xl:mt-20 order-2 xl:order-1">
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
                className={`col-span-2 h-8 sm:h-10 lg:h-11 w-full rounded text-white text-xs sm:text-sm ${isUpperCase ? "bg-orange-600" : "bg-neutral-800"
                  }`}
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
              <button ref={(el) => (focusableRefs.current[47] = el)}
                className="h-8 sm:h-10 lg:h-11 bg-white text-black rounded text-xs sm:text-sm">Next</button>
              <button
                onClick={() => handleKeyPress("!#$")}
                ref={(el) => (focusableRefs.current[48] = el)}
                className="h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm"
              >
                !#$
              </button>
              <button
                onClick={() => handleKeyPress("@")}
                ref={(el) => (focusableRefs.current[49] = el)}
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

            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full mt-8 sm:mt-16 xl:mt-56 gap-3 sm:gap-4">
              <button
                ref={(el) => (focusableRefs.current[2] = el)}
                type="submit"
                onClick={handleSubmit}
                className="w-full sm:w-32 bg-orange-600 h-10 sm:h-12 rounded-xl text-white font-bold transition-colors flex items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)]"
              >
                {loader ? <ClipLoader color="#fff" size={20} /> : "Sign-In"}
              </button>

              <button
                ref={(el) => (focusableRefs.current[3] = el)}
                onClick={() => navigate('/forgot-password')}
                className="bg-gray-700 hover:bg-gray-600 h-8 px-4 rounded text-white text-sm font-medium transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Forget Password?
              </button>

              <div className="flex items-center gap-2">
                <input
                  ref={(el) => (focusableRefs.current[53] = el)}
                  type="checkbox"
                  checked={rememberEmail}
                  onChange={(e) => setRememberEmail(e.target.checked)}
                  className="w-4 sm:w-5 h-4 sm:h-5 accent-orange-500"
                />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">Remember Email</span>
              </div>
            </div>
          </div>

          <div className="bg-opacity-60 rounded-xl max-w-md w-full order-1 xl:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  ref={(el) => (focusableRefs.current[56] = el)}
                  tabIndex={0}
                  onFocus={() => setActiveInput("firstName")}
                  className={`w-full bg-black border rounded px-4 py-3 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${activeInput === "firstName"
                    ? "border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]"
                    : "border-gray-700"
                    }`}
                >
                  {firstName || "John"}
                </div>

                <div
                  ref={(el) => (focusableRefs.current[57] = el)}
                  tabIndex={0}
                  onFocus={() => setActiveInput("lastName")}
                  className={`w-full bg-black border rounded px-4 py-3 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${activeInput === "lastName"
                    ? "border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]"
                    : "border-gray-700"
                    }`}
                >
                  {lastName || "Smith"}
                </div>
              </div>

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

              <div className="relative">
                <div
                  ref={(el) => (focusableRefs.current[1] = el)}
                  tabIndex={0}
                  onFocus={() => setActiveInput("password")}
                  className={`w-full bg-black border rounded px-4 py-3 pr-12 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${activeInput === "password"
                    ? "border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]"
                    : "border-gray-700"
                    }`}
                >
                  {password
                    ? showPassword
                      ? password
                      : "•".repeat(password.length)
                    : "Your Password"}
                </div>

                <button
                  ref={(el) => (focusableRefs.current[55] = el)}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div
                ref={(el) => (focusableRefs.current[58] = el)}
                tabIndex={0}
                onFocus={() => setActiveInput("phone")}
                className={`w-full bg-black border rounded px-4 py-3 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${activeInput === "phone"
                  ? "border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]"
                  : "border-gray-700"
                  }`}
              >
                {phone || "1234567890"}
              </div>

              {ErrorMessage && (
                <div className="bg-red-600 text-white p-3 rounded text-sm">{ErrorMessage}</div>
              )}

            </form>

            <div className="text-center sm:text-right mt-6">
              <p className="text-white text-sm">Already a member?</p>
              <Link
                ref={(el) => (focusableRefs.current[54] = el)}
                to="/signin"
                className="inline-block mt-2 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition text-sm
             focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Sign In
              </Link>
            </div>
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

export default SignUp;