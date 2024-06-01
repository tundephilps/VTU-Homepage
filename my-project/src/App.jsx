import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/LandingPage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/Login" element={<Login />} />

        {/* <Route index element={<Dashboard />} >
          <Route path="orders" element={<Order />} />
          <Route path="products" element={<Product />} />
          <Route path="customers" element={<Customer />} />
        </Route> */}
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
