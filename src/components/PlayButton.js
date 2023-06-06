import { memo } from "react";

const PlayButton = memo(() => {
  return (
    <button
      className="[border:none] py-[42px] px-[57px] bg-gainsboro rounded-mini w-[121px] h-[67px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:bg-moccasin hover:w-[121px] hover:flex-row hover:pl-[57px] hover:pr-[57px] hover:box-border hover:shadow-[0px_4px_4px_rgba(185,_185,_185,_0.25)] hover:cursor-pointer"
      autoFocus
      disabled
      id="Content Button"
    >
      <div className="relative text-5xl font-playfair-display text-black text-left">
        Play
      </div>
    </button>
  );
});

export default PlayButton;
