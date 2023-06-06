import { memo } from "react";

const BackgroundIcon = memo(() => {
  return (
    <img
      className="absolute top-[0px] left-[0px] w-[1480px] h-[1020px] object-cover"
      alt="Background"
      src="/background@2x.png"
    />
  );
});

export default BackgroundIcon;
