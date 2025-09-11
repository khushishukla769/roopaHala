function CustomKeyboard({
  handleKeyPress,
  handleBackspace,
  addEmailDomain,
  setIsUpperCase,
  isUpperCase,
  focusableRefs,
}) {
  return (
    <div className="flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 w-[650px] h-[498px]">
      {/* Number row */}
      <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
        {"1234567890".split("").map((num, idx) => (
          <button
            key={num}
            ref={(el) => (focusableRefs.current[4 + idx] = el)}
            onClick={() => handleKeyPress(num)}
            className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
          >
            {num}
          </button>
        ))}
      </div>

      {/* QWERTY row */}
      <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
        {"qwertyuiop".split("").map((letter, idx) => (
          <button
            key={letter}
            ref={(el) => (focusableRefs.current[14 + idx] = el)}
            onClick={() => handleKeyPress(letter)}
            className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* ASDF row */}
      <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
        {"asdfghjkl".split("").map((letter, idx) => (
          <button
            key={letter}
            ref={(el) => (focusableRefs.current[24 + idx] = el)}
            onClick={() => handleKeyPress(letter)}
            className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
          >
            {letter}
          </button>
        ))}
        <button
          ref={(el) => (focusableRefs.current[33] = el)}
          onClick={() => handleKeyPress("-")}
          className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
        >
          -
        </button>
      </div>

      {/* ZXCV row with Shift */}
      <div className="grid grid-cols-10 gap-1 sm:gap-2 w-full">
        <button
          ref={(el) => (focusableRefs.current[34] = el)}
          onClick={() => setIsUpperCase((prev) => !prev)}
          className={`col-span-2 h-14 w-[122px] rounded text-white text-xl ${isUpperCase
            ? "bg-orange"
            : "bg-darkGray border border-lightGray"
            }`}
        >
          ↑
        </button>
        {"zxcvbnm".split("").map((letter, idx) => (
          <button
            key={letter}
            ref={(el) => (focusableRefs.current[36 + idx] = el)}
            onClick={() => handleKeyPress(letter)}
            className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
          >
            {letter}
          </button>
        ))}
        <button
          ref={(el) => (focusableRefs.current[43] = el)}
          onClick={() => handleKeyPress("-")}
          className="h-14 w-14 bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
        >
          -
        </button>
      </div>

      {/* Email domains */}
      <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
        {["@hotmail.com", "@gmail.com", "@yahoo.com"].map((domain, idx) => (
          <button
            key={domain}
            ref={(el) => (focusableRefs.current[44 + idx] = el)}
            onClick={() => addEmailDomain(domain)}
            className="h-14 w-[210px] bg-darkGray border border-lightGray hover:bg-lightGray rounded text-white text-xl"
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex justify-center gap-1 sm:gap-2 w-full">
        <button
          ref={(el) => (focusableRefs.current[47] = el)}
          className="h-14 w-[122px] bg-white text-black rounded text-xl"
        >
          Next
        </button>

        <button
          ref={(el) => (focusableRefs.current[48] = el)}
          onClick={() => handleKeyPress("!#$")}
          className="h-14 w-[122px] bg-darkGray border border-lightGray hover:bg-lightGray text-white rounded text-xl"
        >
          !#$
        </button>

        <button
          ref={(el) => (focusableRefs.current[49] = el)}
          onClick={() => handleKeyPress("@")}
          className="h-14 w-[56px] bg-darkGray border border-lightGray hover:bg-lightGray text-white rounded text-xl"
        >
          @
        </button>

        <button
          ref={(el) => (focusableRefs.current[50] = el)}
          onClick={() => handleKeyPress(".")}
          className="h-14 w-[56px] bg-darkGray border border-lightGray hover:bg-lightGray text-white rounded text-xl"
        >
          .
        </button>

        <button
          ref={(el) => (focusableRefs.current[51] = el)}
          onClick={() => handleKeyPress(".com")}
          className="h-14 w-[122px] bg-darkGray border border-lightGray hover:bg-lightGray text-white rounded text-xl"
        >
          .com
        </button>

        <button
          ref={(el) => (focusableRefs.current[52] = el)}
          onClick={handleBackspace}
          className="h-14 w-[122px] bg-white text-black rounded text-xl"
        >
          ⌫
        </button>
      </div>
    </div>
  );
}

export default CustomKeyboard;
