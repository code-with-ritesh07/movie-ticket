import { Fragment, type ReactNode } from "react";
import { RedirectBtn } from "../ActionBtn/RedirectBtn";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const links = [
    {
      url: "/dashboard",
      label: "Movie",
    },
    {
      url: "/dashboard/theater",
      label: "Theater",
    },
    {
      url: "/dashboard/users",
      label: "Users",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 p-6">
      {links.map((link) => (
        <Fragment key={link.label}>
          <SidebarLink {...link} />
        </Fragment>
      ))}
    </div>
  );
};

export default Sidebar;

interface SidebarLinkProps {
  url: string;
  label: ReactNode;
  isActive?: boolean;
}

const SidebarLink = ({ url, label }: SidebarLinkProps) => {
  const path = useLocation();

  const isActive = path.pathname === url || path.pathname.startsWith(url + "/");

  return (
    <RedirectBtn
      url={url}
      className={cn(
        "w-full bg-white text-black font-bold hover:text-white",
        isActive ? "bg-indigo-500 text-white hover:bg-indigo-500/70" : ""
      )}
    >
      {label}
    </RedirectBtn>
  );
};
