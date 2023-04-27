import classNames from "classnames";
import { ComponentProps } from "react";

export const Header = ({ children, className }: ComponentProps<"header">) => {
  return <header className={classNames(className)}>{children}</header>;
};
