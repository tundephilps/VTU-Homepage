import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Homepage from "./pages/LandingPage/Homepage";
import ChangePassword from "./pages/Auth/ResetPassword/ChangePassword";
import NewPassword from "./pages/Auth/ResetPassword/NewPassword";
import { Outlet } from "react-router-dom";
import Customer from "./pages/Dashboard/BankTransfer";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Dashboard/Layout";
import Airtime from "./pages/Dashboard/Airtime";
import Data from "./pages/Dashboard/Data";
import Electricity from "./pages/Dashboard/Electricity";
import TVSubscription from "./pages/Dashboard/TVSubscription";
import BankTransfer from "./pages/Dashboard/BankTransfer";
import TargetSavings from "./pages/Dashboard/TargetSavings";
import Referrals from "./pages/Dashboard/Referrals";
import Transactions from "./pages/Dashboard/Transactions";
import FundWallet from "./pages/Dashboard/FundWallet";
import BecomeAnAgent from "./pages/Dashboard/BecomeAnAgent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Airtime" element={<Airtime />} />
          <Route path="Data" element={<Data />} />
          <Route path="Electricity" element={<Electricity />} />
          <Route path="TvSubscription" element={<TVSubscription />} />
          <Route path="BankTransfer" element={<BankTransfer />} />
          <Route path="TargetSavings" element={<TargetSavings />} />

          <Route path="Referrals" element={<Referrals />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="FundWallet" element={<FundWallet />} />
          <Route path="BecomeAnAgent" element={<BecomeAnAgent />} />
        </Route>
      </Routes>
      {/* <div>
        <ul>
          {sidebarData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    ["nav-link", isActive ? "active" : null].join(" ")
                  }
                >
                  <div>{item.icon}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default App;
