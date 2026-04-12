import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="PRAVEDIN Logo"
      width={64}
      height={64}
      className={cn(className)}
    />
  );
}
