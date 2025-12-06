import { type ReactNode } from "react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmitBtnProps {
  isPending: boolean;
  children: ReactNode;
  className?: string;
}

export const SubmitBtn = ({
  isPending,
  children,
  className,
}: SubmitBtnProps) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className={cn("w-full", className)}
    >
      {isPending && <LoaderCircle className="animate-spin mr-2" />}
      {children}
    </Button>
  );
};
