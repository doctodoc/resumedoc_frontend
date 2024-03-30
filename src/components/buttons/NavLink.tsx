import React from "react";
import Button, { GenericButtonProps } from "./Button";
import { useRouter } from "next/navigation";

interface NavLinkProps extends GenericButtonProps {
  afterNav?: () => void;
  href: string;
  className?: string;
}

const NavLink = ({ children, afterNav, href, className }: NavLinkProps) => {
  const router = useRouter();

  const handleNav = () => {
    if (href) router.push(href, { scroll: false });
    if (afterNav) afterNav();
  };

  return (
    <Button onClick={handleNav} className={`${className} text-start`}>
      {children}
    </Button>
  );
};

export default NavLink;
