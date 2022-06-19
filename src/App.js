import { Routes, Route } from "react-router-dom";
import FeaturePage from "./pages/FeaturePage";
import CheckoutPage from "./pages/CheckoutPage";
import MobileNav from "./components/common/nav/MobileNav";
import DesktopNav from "./components/common/nav/DesktopNav";

function App() {
  return (
    <div className="sm:max-w-none lg:max-w-screen-lg lg:mx-auto pt-4 pb-12 lg:py-20 px-6 lg:px-0">
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <Routes>
        <Route exact path="/" element={<FeaturePage />} />
        <Route exact path="/cart" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
