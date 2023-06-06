import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPageFAQs from "./pages/LandingPageFAQs";
import LandingPageFeatures from "./pages/LandingPageFeatures";
import LandingPageRoles from "./pages/LandingPageRoles";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-faqs":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-features":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-roles":
        title = "Roles";
        metaDescription = "This is introduction to the Roles in Game";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/landing-page-faqs" element={<LandingPageFAQs />} />
      <Route path="/landing-page-features" element={<LandingPageFeatures />} />
      <Route path="/landing-page-roles" element={<LandingPageRoles />} />
    </Routes>
  );
}
export default App;
