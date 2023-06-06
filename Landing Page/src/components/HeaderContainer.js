import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HeaderContainer = memo(() => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="absolute top-[18px] left-[44px] w-[1351px] h-[211px]">
      <img
        className="absolute top-[0px] left-[0px] w-[169px] h-[211px] object-cover"
        alt="Logo"
        src="/logo@2x.png"
      />
      <div className="absolute top-[57px] left-[498px] flex flex-row items-start justify-start gap-[30px]">
        <button
          className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white"
          onClick={onButtonClick}
        >
          <div className="relative text-5xl font-playfair-display text-white text-left">
            About
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white">
          <div className="relative text-5xl font-playfair-display text-white text-left">
            Roles
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white">
          <div className="relative text-5xl font-playfair-display text-white text-left">
            Features
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white">
          <div className="relative text-5xl font-playfair-display text-white text-left">
            FAQs
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-gainsboro rounded-mini w-[121px] h-[67px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:bg-khaki hover:cursor-pointer">
          <div className="relative text-5xl font-playfair-display text-black text-left">
            Play
          </div>
        </button>
      </div>
    </div>
  );
});

export default HeaderContainer;
