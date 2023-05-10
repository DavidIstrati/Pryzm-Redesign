import NavButton from "./navbutton";

import { BsFolder, BsPeople, BsHouse } from "react-icons/bs";

const NavBar = (): JSX.Element => {
  return (
    <nav className="w-60 h-full bg-white border-r border-neutral-300 flex flex-col">
      <div className="w-full h-20 py-4 px-4 border-b flex flex-row justify-start items-center space-x-4 border-neutral-300">
        <img src="logodark.svg" className="h-8" />
      </div>
      <div className="w-full h-full py-6 px-2 flex flex-col space-y-4">
        <NavButton active={true} icon={<BsFolder />} text={"Dashboard"} />
        <NavButton active={false} icon={<BsPeople />} text={"Team"} />
        <NavButton active={false} icon={<BsHouse />} text={"Account"} />
      </div>
    </nav>
  );
};

export default NavBar;
