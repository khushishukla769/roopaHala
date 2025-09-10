import React from "react";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";
import roopaHalaIcon from "../images/roopaHalaIcon.png";

import { Fade } from "react-reveal";

function Welcome() {

  return (
    <div>
      <div
        style={{
          backgroundImage: `
      linear-gradient(55.43deg, rgba(0, 0, 0, 0.16) 73.58%, rgba(242, 72, 19, 0.16) 99.17%, rgba(255, 131, 34, 0.16) 105.02%),
      linear-gradient(299.64deg, rgba(0, 0, 0, 0.16) 31.87%, rgba(242, 72, 19, 0.16) 89.04%, rgba(255, 131, 34, 0.16) 100%),
      url(${WelcomePageBanner})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[32rem] w-full sm:h-[65vh] xl:h-[100vh] relative"
      >
        <div className="grid content-center justify-center h-full justify-items-center">
          <div className="w-10/12 text-center sm:w-8/12 md:w-60rem">
            <Fade duration={2000}>
              <img src={roopaHalaIcon} className="h-20 w-auto mx-auto mb-10" />
              <p className="mb-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-white">
                "Experience the Best of Sinhala Cinema Anytime, Anywhere!"
              </p>
            </Fade>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Welcome;
