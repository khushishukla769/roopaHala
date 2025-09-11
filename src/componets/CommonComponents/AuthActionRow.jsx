import { forwardRef } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

// Forward ref so parent can assign refs
export const AuthActionRow = forwardRef(
  (
    {
      loader = false,
      rememberEmail,
      setRememberEmail,
      onSubmit,
      showForgotPassword = true,
      submitText = "Sign-In",
    },
    ref // ref will be an object to hold multiple refs
  ) => {
    const navigate = useNavigate();

    return (
      <div
        className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full gap-3 sm:gap-4"
        style={{ marginTop: "30px" }}
      >
        {/* Submit Button */}
        <button
          ref={(el) => (ref.current[2] = el)}
          type="submit"
          onClick={onSubmit}
          className="w-[163px] h-16 bg-orange rounded-xl text-white font-semibold text-[24px]
          leading-[100%] tracking-[0] text-center align-middle transition-colors flex font-museo
          items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)]"
        >
          {loader ? <ClipLoader color="#fff" size={20} /> : submitText}
        </button>

        {/* Forgot Password */}
        {showForgotPassword && (
          <button
            ref={(el) => (ref.current[3] = el)}
            onClick={() => navigate("/forgot-password")}
            className="bg-darkGray hover:bg-lightGray h-[46px] w-[204px] px-4 rounded-lg
            text-white text-[20px] font-semibold leading-[150%] tracking-[0] font-museo border border-lightGray
            text-center capitalize transition-colors flex items-center justify-center whitespace-nowrap"
          >
            Forget Password?
          </button>
        )}

        {/* Remember Email */}
        <div className="flex items-center gap-[10px]">
          <input
            ref={(el) => (ref.current[53] = el)}
            type="checkbox"
            checked={rememberEmail}
            onChange={(e) => setRememberEmail(e.target.checked)}
            className="w-[40px] h-[40px] rounded-lg border border-lightGray bg-darkGray accent-orange"
            style={{ padding: "8px 16px" }}
          />
          <span className="text-white text-[20px] leading-[150%] tracking-[0] text-center capitalize font-semibold font-museo">
            Remember Email
          </span>
        </div>
      </div>
    );
  }
);
