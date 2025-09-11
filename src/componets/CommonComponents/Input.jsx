import React from "react";

const Input = ({
  value,
  placeholder,
  active,
  onFocus,
  inputRef
}) => {
  return (
    <div
      ref={inputRef}
      tabIndex={0}
      onFocus={onFocus}
      className={`w-full h-[72px] bg-black border border-lightGray rounded-xl px-6 py-6 text-white text-2xl
        cursor-text transition-all duration-300 outline-none flex items-center
        ${active ? "border-orangeHighlight shadow-[2px_2px_12px_0px_rgba(255,140,0,0.38)]" : ""}
      `}
    >
      {value || placeholder}
    </div>
  );
};

export default Input;
