import { type ReactNode } from "react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

interface SubmitBtnProps {
  isPending: boolean;
  children: ReactNode;
}

export const SubmitBtn = ({ isPending, children }: SubmitBtnProps) => {
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending && <LoaderCircle className="animate-spin mr-2" />}
      {children}
    </Button>
  );
};
