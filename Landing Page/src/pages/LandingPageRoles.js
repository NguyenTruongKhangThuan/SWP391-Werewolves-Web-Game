import HeaderContainer from "../components/HeaderContainer";
import ContentComponent from "../components/ContentComponent";
import RolesIcon from "../components/RolesIcon";

const LandingPageRoles = () => {
  return (
    <div className="relative w-full h-[1024px]">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] object-cover"
        alt="Background"
        src="/background@2x.png"
      />
      <HeaderContainer />
      <ContentComponent />
      <RolesIcon />
    </div>
  );
};

export default LandingPageRoles;
