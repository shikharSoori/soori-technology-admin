import { FaUser, FaUserPlus } from "react-icons/fa";
import { AiFillSetting, AiOutlineUsergroupAdd } from "react-icons/ai";

export const data = [
  {
    name: "Products",
    icon: <FaUser />,
    link: "/product",
  },
  {
    name: "Brands",
    icon: <AiOutlineUsergroupAdd />,
    link: "/brand",
  },

  {
    name: "Company Banner",
    icon: <AiFillSetting />,
    link: "/logs",
  },
  {
    name: "Users",
    icon: <FaUserPlus />,
    link: "/admin-panel-user",
  },
];
