import { useEffect } from "react";
import BackgroundIcon from "../components/BackgroundIcon";
import NavigationContainer from "../components/NavigationContainer";
import Content from "../components/Content";

const LandingPage1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-[1024px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
      data-animate-on-scroll
    >
      <BackgroundIcon />
      <NavigationContainer />
      <Content />
      <img
        className="absolute top-[262px] left-[845px] w-[500px] h-[500px] object-cover"
        alt="Werewolf"
        loading="lazy"
        src="/Werewolf@2x.png"
      />
    </div>
  );
};

export default LandingPage1;
