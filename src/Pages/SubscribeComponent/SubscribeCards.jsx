import { useState, useEffect, useRef } from "react";

export const SubscribeCards = () => {
  const [activeInput, setActiveInput] = useState(0);
  const cardRefs = useRef([]);

  const DataInCard = [
    {
      price: "$5.25",
      duration: "Month",
      subscriptionTitle: "Monthly Subscription",
      subscriptionSubtitle:
        "(Subscribe to get unlimited access to stream thousands of hours of Movies)",
      benefits: [
        "SD/HD Available",
        "Watch unlimited Movies and TV series on the go",
        "Watch on your TV Tablet or Mobile",
        "No Ads",
        "Billed Monthly",
        "Auto Renew",
      ],
    },
    {
      price: "$14.90",
      duration: "3 Months",
      subscriptionTitle: "Quarterly Subscription",
      subscriptionSubtitle:
        "(Subscribe to get unlimited access to stream thousands of hours of Movies)",
      benefits: [
        "SD/HD Available",
        "Watch unlimited Movies and TV series on the go",
        "Watch on your TV Tablet or Mobile",
        "No Ads",
        "Billed Monthly",
        "Auto Renew",
      ],
    },
    {
      price: "$29.90",
      duration: "6 Months",
      subscriptionTitle: "Half Yearly Subscription",
      subscriptionSubtitle:
        "(Subscribe to get unlimited access to stream thousands of hours of Movies)",
      benefits: [
        "SD/HD Available",
        "Watch unlimited Movies and TV series on the go",
        "Watch on your TV Tablet or Mobile",
        "No Ads",
        "Billed Monthly",
        "Auto Renew",
      ],
    },
    {
      price: "$50",
      duration: "Year",
      subscriptionTitle: "Annual Subscription",
      subscriptionSubtitle:
        "(Subscribe to get unlimited access to stream thousands of hours of Movies)",
      benefits: [
        "SD/HD Available",
        "Watch unlimited Movies and TV series on the go",
        "Watch on your TV Tablet or Mobile",
        "No Ads",
        "Billed Monthly",
        "Auto Renew",
      ],
    },
  ];

  useEffect(() => {
    if (cardRefs.current[0]) {
      cardRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setActiveInput((prev) => {
          const next = Math.min(prev + 1, DataInCard.length - 1);
          cardRefs.current[next]?.focus();
          return next;
        });
      } else if (e.key === "ArrowLeft") {
        setActiveInput((prev) => {
          const prevIndex = Math.max(prev - 1, 0);
          cardRefs.current[prevIndex]?.focus();
          return prevIndex;
        });
      } else if (e.key === "Enter") {
        const activeCard = cardRefs.current[activeInput];
        if (activeCard) {
          const subscribeBtn = activeCard.querySelector("button");
          subscribeBtn?.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeInput]);

  return (
    <div className="flex justify-center gap-6 p-8">
      {DataInCard.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          tabIndex={0}
          onClick={() => setActiveInput(index)}
          onFocus={() => setActiveInput(index)}
          className={`relative w-[416px] h-[556px] rounded-[28px] p-8
            bg-[#3D3D3D80] backdrop-blur-[4px]
            flex flex-col justify-between text-white
            cursor-pointer transition-all
            outline-none
            ${activeInput === index
              ? "border-2 border-orange shadow-[0_0_16px_0px_#E17C00,0_0_200px_400px_#00000080_inset]"
              : "border-2 border-transparent"
            }`}
        >
          {(index === 1 || index === 2) && (
            <span
              className="absolute top-[-1px] right-[-1px] flex items-center justify-center text-white font-bold bg-orange w-[77px]
               h-9 rounded-tr-[28px] rounded-bl-[24px] opacity-100"
            >
              New
            </span>
          )}

          <div>
            <div className="flex flex-row items-center h-10 gap-1">
              <h2 className="text-[40px] text-orange font-bold">{item.price}</h2>
              <p className="text-common text-[16px]">/ {item.duration}</p>
            </div>
            <h3 className="mt-4 text-xl text-common">{item.subscriptionTitle}</h3>

            <p className="mt-2 text-sm text-subsGray w-[352px]">{item.subscriptionSubtitle}</p>

            <ul className="mt-6 space-y-3">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-subsGray">
                  <span className="text-sm text-subsGray">✔</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <button
            className={`w-[143px] h-[52px] sm:w-[143px] rounded-xl text-xl text-common transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange ${activeInput === index ? "bg-orange" : "bg-lightGray"
              }`}
            onClick={() => alert(`Subscribed: ${item.subscriptionTitle}`)}
          >
            Subscribe
          </button>
        </div>
      ))}
    </div>
  );
};