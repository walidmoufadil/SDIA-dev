import { useState } from "react";
import { navItems } from "../services/NavItems";
import LinkItem from "./LinkItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const {logout} = useAuth()

  return (
    <nav className="bg-gray-700 text-white w-full p-4 text-base border-b-4 border-gray-950 shadow-xl mb-6 flex justify-between items-center">
      <a className="flex items-center">
        <img src="./src/assets/logo_enset.gif" alt="Logo ENSET" className="h-10" />
      </a>
      
      {/* Menu pour écrans larges */}
      <div className="hidden md:flex items-center justify-center gap-6">

        {navItems.map(item => (
          <LinkItem item={item} 
          key={item.id} 
          onClick={item.link === "Logout" ? () => { 
            logout(); 
            setOpenMenu(false);
          } : () => setOpenMenu(false)} />
        ))}

      </div>
      
      {/* Bouton hamburger pour mobile */}
      <div className="block text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`fixed top-0 left-0 flex flex-col items-start p-6 pt-16 gap-y-6 w-[220px] h-screen bg-gray-800 z-50 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute text-xl cursor-pointer top-4 right-4" onClick={toggleMenu}>
          <RxCross2 />
        </div>
        
        {navItems.map(item => (
          <LinkItem 
            item={item} 
            key={item.id} 
            onClick={item.link === "Logout" ? () => { 
              logout(); 
              setOpenMenu(false);
            } : () => setOpenMenu(false)}
          />
        ))}

      </div>
    </nav>
  );
}

export default Navbar;