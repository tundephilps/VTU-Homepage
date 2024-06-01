import { FaHome, FaBook, FaCartArrowDown, FaUserPlus } from "react-icons/fa";

const sidebarData = [
  {
    title: "Home",
    path: "/Dashboard",
    icon: <FaHome />,
  },

  {
    title: "Products",
    path: "/Dashboard/products",
    icon: <FaBook />,
  },

  {
    title: "Home",
    path: "/Dashboard/orders",
    icon: <FaCartArrowDown />,
  },

  {
    title: "Customers",
    path: "/Dashboard/customers",
    icon: <FaUserPlus />,
  },
];

export default sidebarData;
