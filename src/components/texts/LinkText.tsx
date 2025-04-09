import { URL } from "@/shared/types/componentTypes";
import { cn, isUrl } from "@/utils";
import React from "react";

type Props = {
  underline?: boolean;
  link: string;
  children: string
};

type LinkProps = {
  url: URL;
  icon?: React.ReactNode;
  iconOnRight?: boolean;
  label?: string;
  className?: string;
}; 

const LinkText = ({ underline, link, children }: Props) => {
  return (
    <div>
      <a className={cn(`${underline ? "underline" : ""} text-blue-700`)} href={link}>{children}</a>
    </div>
  );
};

const Link = ({ url, icon, iconOnRight, label, className }: LinkProps) => {
  if (!isUrl(url.href)) return null;

  return (
    <div className="flex items-center gap-x-1.5">
      {!iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
      <a
        href={url.href}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className={cn("inline-block", className)}
      >
        {label ?? (url.label || url.href)}
      </a>
      {iconOnRight && (icon ?? <i className="ph ph-bold ph-link text-primary" />)}
    </div>
  );
};

type LinkedEntityProps = {
  name: string;
  url: URL;
  separateLinks?: boolean;
  className?: string;
  underline?: boolean;
};

export const LinkedEntity = ({ name, url, separateLinks, className, underline }: LinkedEntityProps) => {
  return !separateLinks && isUrl(url.href) ? (
    <Link
      url={url}
      label={name}
      icon={<i className="ph ph-bold ph-globe text-primary" />}
      iconOnRight={true}
      className={cn(`${className}`, underline && 'underline' )}
    />
  ) : (
    <div className={cn(`${className}`, underline && 'underline')}>{name}</div>
  );
};
export default LinkText;
