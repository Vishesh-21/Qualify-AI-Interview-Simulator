"use client";
import { ToggleMode } from "@/components/ToggleMode";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function HomeNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Interview", link: "/interview" },
    { name: "FAQ", link: "#faq", show: pathname === "/" },
    { name: "About", link: "#about" },
  ].filter((item) => item.show !== false);

  const { isSignedIn } = useUser();
  const { theme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-3 z-100">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <ToggleMode />
            {isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      width: "34px",
                      height: "34px",
                    },
                  },
                }}
              />
            ) : (
              <SignInButton>
                <NavbarButton variant={theme === "dark" ? "primary" : "dark"}>
                  Sign in
                </NavbarButton>
              </SignInButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ToggleMode />
              {isSignedIn && <UserButton />}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {!isSignedIn && (
                <SignInButton>
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant={theme === "dark" ? "primary" : "dark"}
                    className="w-full"
                  >
                    Sign in
                  </NavbarButton>
                </SignInButton>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;
