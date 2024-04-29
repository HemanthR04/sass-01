import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { SignIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function NavBar() {
  const { userId } = auth();
  const user = await currentUser();
  

  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-4 ">
      <div className="logo text-4xl font-bold">HR SASS</div>
      <div className="links">
        {userId ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserButton/>
          </div>
        ) : (
          <div className="flex items-center gap-4 ">
            <ModeToggle />
            <Link href={"/sign-in"}>
              <Button>Sign In</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button variant={"secondary"}>Sign Up</Button>
            </Link>
          </div>
        )}

        
      </div>
    </div>
  );
}

NavBar;
