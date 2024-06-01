import React from "react";
import sidebarData from "../../data/sidebarData";
import { NavLink, Route, Routes } from "react-router-dom";
import Order from "./Order";
import Product from "./Product";
import Customer from "./Customer";

const Dashboard = () => {
  return (
    <div className="h-[100vh] bg-red-400 flex flex-row-reverse">
      <div className="w-[90%] h-[100vh] bg-blue-300">
        {/* <Routes>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="orders" element={<Order />} />
            <Route path="products" element={<Product />} />
            <Route path="customers" element={<Customer />} />
          </Route>
        </Routes> */}
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Dashboard;
