const LandingPageFeatures = () => {
  return (
    <div className="relative w-full h-[1024px] text-center text-17xl text-white font-playfair-display">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover"
        alt=""
        src="/background@2x.png"
      />
      <div className="absolute top-[18px] left-[44px] w-[1347px] h-[211px] text-left text-5xl">
        <div className="absolute top-[0px] left-[0px] w-[169px] h-[211px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="absolute top-[51px] left-[494px] flex flex-row items-end justify-start gap-[30px]">
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
      <div className="absolute top-[351px] left-[calc(50%_-_89px)] text-21xl text-left">
        Features
      </div>
      <div className="absolute top-[482px] left-[128px] w-[333px] h-[259px]">
        <img
          className="absolute top-[0px] left-[97px] w-[139px] h-[139px]"
          alt=""
          src="/icon-frame1.svg"
        />
        <div className="absolute top-[163px] left-[0px] inline-block w-[333px]">
          Unique role abilities for each player.
        </div>
      </div>
      <div className="absolute top-[482px] left-[554px] w-[333px] h-[259px]">
        <img
          className="absolute top-[0px] left-[97px] w-[139px] h-[139px]"
          alt=""
          src="/icon-frame2.svg"
        />
        <div className="absolute top-[178px] left-[0px] inline-block w-[333px]">
          A battle full of voice
        </div>
      </div>
      <div className="absolute top-[482px] left-[980px] w-[333px] h-[259px]">
        <img
          className="absolute top-[0px] left-[97px] w-[139px] h-[139px]"
          alt=""
          src="/icon-frame3.svg"
        />
        <div className="absolute top-[163px] left-[0px] inline-block w-[333px]">
          Customizable Game Settings
        </div>
      </div>
    </div>
  );
};

export default LandingPageFeatures;
