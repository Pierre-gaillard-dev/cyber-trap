import type { FC } from "react";
import menuicon from "@assets/menu.svg";

const Header: FC = () => {
  return (
    <header className="w-full h-16 bg-blue-600 text-white flex items-center justify-center">
      <h1 className="text-xl font-bold">CYBER' TRAP</h1>
      <img src={menuicon} alt="Menu" className="absolute left-4 w-6 h-6" />
    </header>
  );
};

export default Header;
