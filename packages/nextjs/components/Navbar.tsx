"use client";

import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";

export default function Navbar() {
  return (
    <header className="py-6 bg-white sticky top-0 shadow-md z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-blue-600">
          DefiVerse
        </Link>
        <nav className="space-x-6 font-medium">
          <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
            Courses
          </Link>
          <Link href="/keywords" className="text-gray-600 hover:text-blue-600 transition-colors">
            Keywords
          </Link>
          <Link href="/news" className="text-gray-600 hover:text-blue-600 transition-colors">
            News
          </Link>
          <Link href="/dexs" className="text-gray-600 hover:text-blue-600 transition-colors">
            DEXs
          </Link>
          <Link href="/quiz" className="text-gray-600 hover:text-blue-600 transition-colors">
            Quiz
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <RainbowKitCustomConnectButton />
        </div>
      </div>
    </header>
  );
}
