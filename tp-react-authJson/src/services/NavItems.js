import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

export const navItems = [
    {
      id: 1,
      icon: MdDashboard,
      link: "Dashboard",  
      url: "/dashboard"   
    },
    {
      id: 2,
      icon: MdOutlineProductionQuantityLimits,
      link: "Products",
      url: "/products"
    },
    {
      id: 3,
      icon: FaCloudUploadAlt,
      link: "Upload File",
      url: "/uploadFile"
    },
    {
      id: 4,
      icon: MdOutlineLogout,
      link: "Logout",
      url: "/logout"
    },
  ];