import { useState, useRef, useEffect } from "react";

const Input = ({
  value,
  label,
  active,
  onFocus,
  inputRef,
  eyeButtonRef,
  onChange,
  type = "text",
  showPasswordToggle = false
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const internalRef = useRef(null);

  const inputElementRef = inputRef || internalRef;
  const isFloating = focused || value;

  useEffect(() => {
    if (focused && inputElementRef.current) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(inputElementRef.current);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [value, focused]);

  return (
    <div
      className="relative w-full cursor-text"
      onClick={() => inputElementRef.current?.focus()}
    >
      <label
        className={`absolute left-6 px-1 transition-all duration-300 pointer-events-none
          ${isFloating
            ? "-top-3 text-sm text-orangeHighlight bg-black"
            : "top-1/2 -translate-y-1/2 text-2xl text-lightGray bg-transparent"}
        `}
      >
        {label}
      </label>

      <div
        ref={inputElementRef}
        contentEditable
        suppressContentEditableWarning
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={() => setFocused(false)}
        onInput={(e) => onChange?.({ target: { value: e.currentTarget.textContent } })}
        tabIndex={0}
        className={`w-full h-[72px] bg-black border border-lightGray rounded-xl px-6 pr-12 text-white text-2xl
    transition-all duration-300 outline-none
    ${active ? "border-orangeHighlight shadow-[2px_2px_12px_0px_rgba(255,140,0,0.38)]" : ""}
    leading-[72px]`}
      >
        {type === "password" && !showPassword ? "*".repeat(value?.length || 0) : value}
      </div>

      {type === "password" && showPasswordToggle && (
        <button
          ref={eyeButtonRef}
          type="button"
          tabIndex={0}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
};

export default Input;