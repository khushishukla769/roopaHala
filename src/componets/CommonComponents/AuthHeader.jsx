import roopaHalaIcon from "../../images/roopaHalaIcon.png";
import { FaArrowLeft } from "react-icons/fa6";

export const BackButton = ({ inputRef, onClick, onKeyDown }) => (
  <button
    ref={inputRef}
    onClick={onClick}
    onKeyDown={onKeyDown}
    className="flex items-center justify-center bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors h-14 w-14"
  >
    <FaArrowLeft className="text-xl text-orange" />
  </button>
);

export const AuthHeader = ({ backButtonRef, onBackClick, onKeyDown, showText = true }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4 sm:px-6">
      <div className="flex items-center gap-4 flex-1">
        <BackButton inputRef={backButtonRef} onClick={onBackClick} onKeyDown={onKeyDown} />
        {showText && <div className="flex flex-col">
          <h1 className="text-base sm:text-xl text-common">
            Sign-In to your Roopa Hala Account
          </h1>
          <p className="text-xs sm:text-xl opacity-80 text-common">
            Sri Lanka's Premier & Largest Sinhala Movie Platform
          </p>
        </div>}
      </div>

      <img src={roopaHalaIcon} className="h-[56px] w-[140px]" alt="Roopa Hala Icon" />
    </div>
  );
};