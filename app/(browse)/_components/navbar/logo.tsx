import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="rounded-xl p-1">
        <Image
          src="/logo.jpg"
          alt="Gamehub"
          height="50"
          width="50"
          className="rounded-xl"
        />

      </div>
    </div>
  );
};