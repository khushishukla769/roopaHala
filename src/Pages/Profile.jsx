import { Fade } from "react-reveal";
import { PiUserListBold } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { FaRegStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect, useRef, useState } from "react";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";
import RowPost from "../componets/RowPost/RowPost";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Profile() {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const { User } = useContext(AuthContext);
  const navigate = useNavigate();

  const subscribeRef = useRef(null);
  const profileRef = useRef(null);
  const logoutRef = useRef(null);

  useEffect(() => {
    if (!User) return;
    getDoc(doc(db, "WatchedMovies", User.uid)).then((result) => {
      if (result.exists()) {
        const mv = result.data();
        setWatchedMovies(mv.movies);
      }
    });
  }, [User]);

  useEffect(() => {
    if (subscribeRef.current) {
      subscribeRef.current.focus();
    }
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        if (document.activeElement === subscribeRef.current) {
          profileRef.current.focus();
        } else if (document.activeElement === profileRef.current) {
          logoutRef.current.focus();
        }
      } else if (e.key === "ArrowLeft") {
        if (document.activeElement === logoutRef.current) {
          profileRef.current.focus();
        } else if (document.activeElement === profileRef.current) {
          subscribeRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Fade>
      <div className="flex flex-row gap-4 items-center ml-40 w-[90%] justify-between p-6">
        <div className="flex flex-row gap-5 items-center h-24">
          <div className="h-24 w-24 bg-lightGray rounded-xl"></div>
          <div className="flex flex-col justify-center gap-[6px]">
            <h1 className="text-common text-[32px] leading-none">
              {User?.displayName || "Guest User"}
            </h1>
            <p className="text-white font-museo text-[16px] leading-none">
              {User?.email}
            </p>
            <p className="text-white font-museo text-[16px] leading-none">
              {User?.uid}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 h-24 items-center">
          <button
            ref={subscribeRef}
            className="flex-row gap-2 bg-orange w-[178px] h-[52px] flex justify-center items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => navigate("/SubscribePage")}
          >
            <FaRegStar className="text-white h-6 w-6" />
            <span className="text-common text-[16px]">Subscribe now</span>
          </button>

          <button
            ref={profileRef}
            onClick={() => navigate("/EditProfile")}
            className="text-white bg-lightGray w-14 h-14 flex justify-center items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
          >
            <PiUserListBold className="w-7 h-7" />
          </button>

          <button
            ref={logoutRef}
            onClick={handleSignOut}
            className="text-orange bg-lightGray w-14 h-14 flex justify-center items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
          >
            <FaPowerOff className="w-7 h-7" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        {watchedMovies.length !== 0 ? (
          <RowPost
            title="Watched Movies"
            movieData={watchedMovies}
            key={"Watched Movies"}
          />
        ) : null}
      </div>
    </Fade>
  );
}

export default Profile;