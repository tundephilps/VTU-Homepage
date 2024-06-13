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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="airtime" element={<Airtime />} />
          <Route path="data" element={<Data />} />
          <Route path="electricity" element={<Electricity />} />
          <Route path="tvSubscription" element={<TVSubscription />} />
          <Route path="bankTransfer" element={<BankTransfer />} />
          <Route path="targetSavings" element={<TargetSavings />} />

          <Route path="referrals" element={<Referrals />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="fundWallet" element={<FundWallet />} />
          <Route path="becomeAnAgent" element={<BecomeAnAgent />} />
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
