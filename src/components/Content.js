import { memo } from "react";

const Content = memo(() => {
  return (
    <div className="absolute top-[343px] left-[58px] flex flex-col items-start justify-start gap-[30px] text-left text-21xl text-white font-playfair-display">
      <h4 className="m-0 relative text-[inherit] font-normal font-inherit">
        Werewolves - The Village Of Deception
      </h4>
      <p className="m-0 relative text-13xl leading-[151.3%] inline-block italic w-[718px]">
        Get ready to howl with excitement! The Werewolf Web Game is a thrilling
        social deduction game where you work together with other players to find
        and eliminate the werewolves in your midst. With unique roles and
        special powers, each game is a new adventure full of twists and turns.
        Are you ready to join the hunt?
      </p>
    </div>
  );
});

export default Content;
