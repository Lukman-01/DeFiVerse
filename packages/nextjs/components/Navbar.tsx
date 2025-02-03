// Navbar.tsx
"use client";

import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "~~/utils/utils";
import Menu from "./Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-20 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              DeFiVerse
            </Link>

            <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    pathname === link.href ? "text-blue-600" : "text-gray-700",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <RainbowKitCustomConnectButton />
              </div>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export const navLinks = [
  { name: "Courses", href: "/courses" },
  { name: "Keywords", href: "/keywords" },
  { name: "News", href: "/news" },
  { name: "DEXs", href: "/dexs" },
  { name: "Quiz", href: "/quiz" },
];
