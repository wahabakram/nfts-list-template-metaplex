import { ReactNode } from "react";

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-sfProText">{children}</h1>;
};
