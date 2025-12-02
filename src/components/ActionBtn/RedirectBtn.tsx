import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

interface RedirectBtnProps {
  url: string;
  children: ReactNode;
}
export const RedirectBtn = ({ url, children }: RedirectBtnProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(url);
  };
  return <Button onClick={handleRedirect}>{children}</Button>;
};
