import { memo } from "react";

const ContentComponent = memo(() => {
  return (
    <div className="absolute top-[387px] left-[688px] flex flex-col items-end justify-start gap-[30px] text-left text-21xl text-white font-playfair-display">
      <h4 className="m-0 relative text-[inherit] font-normal font-inherit">
        Roles
      </h4>
      <p className="m-0 relative text-13xl inline-block italic text-right w-[718px]">
        There are two main roles in the game: Villagers and Werewolves.
        Villagers work together to find and eliminate the werewolves, while the
        werewolves try to eliminate the villagers and remain hidden.
      </p>
    </div>
  );
});

export default ContentComponent;
