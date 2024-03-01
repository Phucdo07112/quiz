import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { 
  SignInButton, 
  UserButton, 
  currentUser
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button size="sm">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <UserButton
            afterSignOutUrl="/"
          />
        </div>
      )}
    </div>
  );
};