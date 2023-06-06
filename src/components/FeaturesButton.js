import { memo } from "react";

const FeaturesButton = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:border-[1px] hover:border-solid hover:border-white">
      <div className="relative text-5xl font-playfair-display text-white text-left">
        Features
      </div>
    </button>
  );
});

export default FeaturesButton;
