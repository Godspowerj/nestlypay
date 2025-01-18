import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { MasterAuth } from "./Components/MasterAuth";
import { SignUp } from "./Components/AuthpersonalAccount/SignUp";
import Confirmation from "./Components/AuthpersonalAccount/Confirmation";
import { Signin } from "./Components/AuthpersonalAccount/Signin";
import { Forgetpassword } from "./Components/AuthpersonalAccount/Forgetpassword";
import { NewUserSignUp } from "./Components/AuthpersonalAccount/NewUserSignup";
import { UpdatePassword } from "./Components/AuthpersonalAccount/UpdatePassword";
import { PersonalInfo } from "./Components/AuthbusinessAccount/PersonalInfo";
import { Businessinfo } from "./Components/AuthbusinessAccount/Buisnessinfo";
import { Onelaststep } from "./Components/AuthbusinessAccount/OnelastStep";
import { Dashboard } from "./Components/Dashboard/DashboardLayout";
import Userdashboard from "./Components/Dashboard/Userdashboard";
import { MyModels } from "./Components/Dashboard/MyModels";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<MasterAuth />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forgotpassword" element={<Forgetpassword />} />
        <Route path="createaccount" element={<NewUserSignUp />} />
        <Route path="updatepassword" element={<UpdatePassword />} />
        <Route path="personalsignup" element={<PersonalInfo />} />
        <Route path="businessinfo" element={<Businessinfo />} />
        <Route path="laststep" element={<Onelaststep />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Userdashboard />} />
          <Route path="mymodels" element={<MyModels/>}/>
        </Route>
      </Routes>
    </>
  );
}
