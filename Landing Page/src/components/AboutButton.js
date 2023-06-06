import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AboutButton = memo(() => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/landing-page-roles");
  }, [navigate]);

  return (
    <button
      className="[border:none] py-[42px] px-[57px] bg-[transparent] w-[153px] h-[76px] flex flex-row box-border items-center justify-center cursor-pointer hover:bg-black hover:rounded-mini hover:box-border hover:cursor-pointer hover:border-[1px] hover:border-solid hover:border-white"
      disabled
      onClick={onButtonClick}
    >
      <div className="relative text-5xl font-playfair-display text-white text-left">
        About
      </div>
    </button>
  );
});

export default AboutButton;
