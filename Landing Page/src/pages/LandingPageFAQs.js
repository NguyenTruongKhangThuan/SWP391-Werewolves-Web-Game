const LandingPageFAQs = () => {
  return (
    <div className="relative w-full h-[1024px] text-left text-17xl text-white font-playfair-display">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover"
        alt=""
        src="/background@2x.png"
      />
      <div className="absolute top-[18px] left-[44px] w-[1354px] h-[211px] text-5xl">
        <div className="absolute top-[0px] left-[0px] w-[169px] h-[211px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="absolute top-[68px] left-[501px] flex flex-row items-center justify-start gap-[30px]">
          <div className="w-[153px] h-[76px] flex flex-row py-[42px] px-[57px] box-border items-center justify-center">
            <div className="relative">About</div>
          </div>
          <div className="w-[153px] h-[76px] flex flex-row py-[42px] px-[57px] box-border items-center justify-center">
            <div className="relative">Roles</div>
          </div>
          <div className="w-[153px] h-[76px] flex flex-row py-[42px] px-[57px] box-border items-center justify-center">
            <div className="relative">Features</div>
          </div>
          <div className="w-[153px] h-[76px] flex flex-row py-[42px] px-[57px] box-border items-center justify-center">
            <div className="relative">FAQs</div>
          </div>
          <div className="rounded-mini bg-gainsboro w-[121px] h-[67px] overflow-hidden shrink-0 flex flex-row py-[42px] px-[57px] box-border items-center justify-center text-black">
            <div className="relative">Play</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[268px] left-[115px] w-[94px] h-[53px] text-21xl">
        <div className="absolute top-[0px] left-[calc(50%_-_47px)]">FAQs</div>
      </div>
      <div className="absolute top-[360px] left-[115px] w-[861px] h-24">
        <div className="absolute top-[0px] left-[0px]">
          <p className="m-0">{`Q: How many players do I need to start the game? `}</p>
          <p className="m-0">
            A: The game requires a minimum of 7 players to start.
          </p>
        </div>
      </div>
      <div className="absolute top-[535px] left-[115px] w-[1034px] h-24">
        <div className="absolute top-[0px] left-[0px]">
          <p className="m-0">{`Q: How do I know if I'm a werewolf? `}</p>
          <p className="m-0">
            A: Your role will be assigned to you at the beginning of the game.
          </p>
        </div>
      </div>
      <div className="absolute top-[710px] left-[119px] w-[870px] h-24">
        <div className="absolute top-[0px] left-[0px]">
          <p className="m-0">{`Q: Can I change the game settings? `}</p>
          <p className="m-0">
            A: Yes, you can customize game settings to your liking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFAQs;
