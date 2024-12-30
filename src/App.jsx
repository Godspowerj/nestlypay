import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { MasterAuth } from "./Components/MasterAuth";
import { SignUp } from "./Components/AuthpersonalAccount/SignUp";
import Confirmation from "./Components/AuthpersonalAccount/Confirmation";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<MasterAuth />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}
