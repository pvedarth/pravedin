import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, markOnly = false }: { className?: string; markOnly?: boolean }) {
  return (
    <Image
      src={markOnly ? "/logo-only.svg" : "/logo-combined.svg"}
      alt="PRAVEDIN Logo"
      width={markOnly ? 40 : 180}
      height={40}
      className={cn(className)}
    />
  );
}