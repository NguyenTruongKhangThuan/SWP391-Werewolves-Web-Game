import { memo } from "react";

const LogoIcon = memo(() => {
  return (
    <img
      className="absolute top-[0px] left-[0px] w-[169px] h-[211px] object-cover"
      alt="Logo"
      src="/logo@2x.png"
    />
  );
});

export default LogoIcon;
