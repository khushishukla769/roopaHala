import WelcomePageBanner from "../images/WelcomePageBanner.jpg";
import roopaHalaIcon from "../images/roopaHalaIcon.png";
import { Fade } from "react-reveal";
import GradientBgImage from "./GradientBgImage";

function Welcome() {
  return (
    <GradientBgImage>
      <div className="w-10/12 text-center sm:w-8/12 md:w-60rem flex flex-col justify-center items-center h-[100vh]">
        <Fade duration={2000}>
          <img
            src={roopaHalaIcon}
            className="h-[120px] w-[300px] mx-auto mb-10"
          />
          <p className="mb-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-sans leading-[1.4] break-words">
            "Experience the Best of Sinhala Cinema Anytime, Anywhere!"
          </p>
        </Fade>
      </div>
    </GradientBgImage>
  );
}

export default Welcome;
