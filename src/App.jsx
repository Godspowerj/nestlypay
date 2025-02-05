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
import UserDashboardLayout from "./Dashboard.jsx/Userdashboardlayout";
import NotFound from "./Components/Notfound";
import Home from "./Dashboard.jsx/DashboardPages/Home";
import Model from "./Dashboard.jsx/DashboardPages/Model";
import Activity from "./Dashboard.jsx/DashboardPages/Activity";
import { Invoicehistory } from "./Dashboard.jsx/DashboardPages/invoicehistory";
import Clients from "./Dashboard.jsx/DashboardPages/Clients";
import SubMerchant from "./Dashboard.jsx/DashboardPages/SubMerchant";
import Catalog from "./Dashboard.jsx/DashboardPages/Catalog/Catalog";
import Product from "./Dashboard.jsx/DashboardPages/Product";
import Profile from "./Dashboard.jsx/DashboardPages/Profile";
import Setting from "./Dashboard.jsx/DashboardPages/ProfileSetting/Setting";
import CompanyOverview from "./Dashboard.jsx/DashboardPages/ProfileSetting/CompanyOverview";
import { Onelaststep } from "./Components/AuthbusinessAccount/Onelaststep";

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
        <Route path="laststep" element={<Onelaststep/>} />

        <Route path="userdashboard" element={<UserDashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="model" element={<Model />} />
          <Route path="activity" element={<Activity />} />
          <Route path="invoice" element={<Invoicehistory />} />
          <Route path="clients" element={<Clients />} />
          <Route path="submerchant" element={<SubMerchant />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product" element={<Product />} />
          <Route path="userprofile" element ={<Profile/>}/>
          <Route path="setting" element={<Setting/>}></Route>
          <Route path="overview" element={<CompanyOverview/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
