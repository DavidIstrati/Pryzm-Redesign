import { ReactNode } from "react";

const NavButton = ({
  icon,
  text,
  active,
  url = "",
}: {
  icon: JSX.Element;
  text: string;
  active: boolean;
  url?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex w-full px-5 py-3 text-xs space-x-4 justify-start items-center rounded-md cursor-pointer ${
        active ? "bg-indigo-100 text-indigo-800" : "bg-white text-neutral-600"
      }`}
    >
      <span className="text-sm">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default NavButton;
