import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

interface RedirectBtnProps {
  url: string;
  children: ReactNode;
  className?: string;
}
export const RedirectBtn = ({ url, children, className }: RedirectBtnProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(url);
  };
  return (
    <Button type="button" onClick={handleRedirect} className={className}>
      {children}
    </Button>
  );
};
