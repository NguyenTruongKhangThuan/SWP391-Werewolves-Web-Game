import { memo } from "react";
import AboutButton from "./AboutButton";
import RolesButton from "./RolesButton";
import FeaturesButton from "./FeaturesButton";
import FAQsButton from "./FAQsButton";
import PlayButton from "./PlayButton";
import LogoIcon from "./LogoIcon";

const NavigationContainer = memo(() => {
  return (
    <div className="absolute top-[18px] left-[44px] w-[1353px] h-[211px]">
      <div className="absolute top-[67px] left-[500px] flex flex-row items-center justify-start gap-[30px]">
        <AboutButton />
        <RolesButton />
        <FeaturesButton />
        <FAQsButton />
        <PlayButton />
      </div>
      <LogoIcon />
    </div>
  );
});

export default NavigationContainer;
