import { memo } from "react";

const RolesButton = memo(() => {
  return (
    <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white">
      <div className="relative text-5xl font-playfair-display text-white text-left">
        Roles
      </div>
    </button>
  );
});

export default RolesButton;
