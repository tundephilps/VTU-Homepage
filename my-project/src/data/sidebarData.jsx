import { FaHome, FaBook, FaCartArrowDown, FaUserPlus } from "react-icons/fa";

const sidebarData = [
  {
    title: "Home",
    path: "/Dashboard",
    icon: <FaHome />,
  },

  {
    title: "Products",
    path: "/products",
    icon: <FaBook />,
  },

  {
    title: "Home",
    path: "/orders",
    icon: <FaCartArrowDown />,
  },

  {
    title: "Customers",
    path: "/customers",
    icon: <FaUserPlus />,
  },
];

export default sidebarData;
