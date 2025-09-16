import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import videoIcon from "../../images/VideoIcon.png";
import TitleImage from "../../images/TitleImage.png";
import { PiHouseDuotone, PiHouseFill, PiShapesFill, PiShapesBold } from "react-icons/pi";
import { FiTv } from "react-icons/fi";
import { BiSolidTv } from "react-icons/bi";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { MdMovieCreation, MdOutlineMovie } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRefs = useRef([]);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.to === location.pathname);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      navRefs.current[activeIndex].focus();
    }
  }, [location.pathname]);

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % navRefs.current.length;
      navRefs.current[nextIndex].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + navRefs.current.length) % navRefs.current.length;
      navRefs.current[prevIndex].focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navRefs.current[index].click();
    }
  };

  const navItems = [
    { to: "/", icon: <PiHouseDuotone className="w-6 h-6" />, ActiveIcon: <PiHouseFill className="w-6 h-6" /> },
    { to: "/search", icon: <RiSearchLine className="w-6 h-6" />, ActiveIcon: <RiSearchFill className="w-6 h-6" /> },
    { to: "/series", icon: <FiTv className="w-6 h-6" />, ActiveIcon: <BiSolidTv className="w-6 h-6" /> },
    { to: "/liked", icon: <MdOutlineMovie className="w-6 h-6" />, ActiveIcon: <MdMovieCreation className="w-6 h-6" /> },
    { to: "/history", icon: <PiShapesBold className="w-6 h-6" />, ActiveIcon: <PiShapesFill className="w-6 h-6" /> },
    { to: "/profile", icon: <FaRegCircleUser className="w-6 h-6" />, ActiveIcon: <FaUserCircle className="w-6 h-6" /> },
  ];

  return (
    <aside
      className="fixed top-0 left-0 h-full z-40 w-[170px] flex flex-col justify-between pt-10 pr-20 pb-10 pl-10"
      style={{
        background: "linear-gradient(90deg, #000000 34%, rgba(0,0,0,0) 100%)",
        opacity: 1,
      }}
    >
      <div>
        <Link to="/" className="flex flex-col items-center justify-center">
          <img src={videoIcon} className="h-10 w-10" alt="Roopa Hala Icon" />
          <img src={TitleImage} className="h-5 w-12" alt="Roopa Hala Icon" />
        </Link>

        <nav className="mt-10 flex flex-col items-center gap-6 text-white h-[360px] w-[50px]">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <div
                key={index}
                ref={(el) => (navRefs.current[index] = el)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onClick={() => navigate(item.to)}
                className={`w-[34px] p-1 flex items-center justify-center focus:outline-none border-b-4
                  ${isActive ? "border-orange" : "border-transparent text-iconDefault"}
                  focus:border-orange cursor-pointer`}
              >
                {isActive
                  ? item.ActiveIcon
                  : item.icon}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;