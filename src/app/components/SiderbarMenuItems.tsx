"use client";

import Link from "next/link";
import { JSX } from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SiderbarMenuItems = ({ path, icon, title, subtitle }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${style.link} ${
        pathName === path ? style["active-link"] : ""
      }`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {icon}
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

export default SiderbarMenuItems;
