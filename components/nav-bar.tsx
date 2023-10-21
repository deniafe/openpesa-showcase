"use client"

import Image from "next/image"
import { MainNav } from "@/components/main-nav";
import TeamSwitcher from "@/components/team-switcher";
import { Search } from "./search";
import { UserNav } from "./user-nav";
import { MobileNav } from "./mobile-nav";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)

  useEffect(() => {
    // Function to update isMobile when window size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="border-b">
        {isMobile ? 
          (
            <div className="flex h-16 items-center justify-between px-4">
              {/* <TeamSwitcher /> */}
              <Image alt="logo" src="/logo2.png" height={40} width={80} />
              <MobileNav />
            </div>
          ) :
          (
            <div className="flex h-16 items-center px-4">
                {/* <TeamSwitcher /> */}
                <Image alt="logo" src="/logo2.png" height={50} width={100} className="mr-8 mt" />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <UserNav />
                </div>
            </div>
          )
        }
       
      </div>
    </>
  )
}