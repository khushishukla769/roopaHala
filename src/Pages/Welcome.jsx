import roopaHalaIcon from "../images/roopaHalaIcon.png";
import { Fade } from "react-reveal";
import GradientBgImage from "./GradientBgImage";

function Welcome() {
  return (
    <GradientBgImage>
      <div className="flex flex-col justify-center items-center h-screen w-full px-4 text-center">
        <Fade duration={2000}>
          <img
            src={roopaHalaIcon}
            className="h-[120px] w-[300px] mx-auto mb-10"
            alt="Roopa Hala Icon"
          />
          <p className="mb-3 text-2xl sm:text-3xl md:text-4xl text-common leading-[1.4] break-words">
            "Experience the Best of Sinhala Cinema Anytime, Anywhere!"
          </p>
        </Fade>
      </div>
    </GradientBgImage>
  );
}

export default Welcome;
