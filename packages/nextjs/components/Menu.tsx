import { X } from "lucide-react";
import { navLinks } from "./Navbar";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { usePathname } from "next/navigation";
import { cn } from "~~/utils/utils";

export default function Menu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm"
      aria-label="Menu"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="absolute right-0 h-full w-full max-w-sm bg-white p-6 shadow-lg animate-in slide-in-from-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
            onClick={onClose}
          >
            DefiVerse
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex w-full items-center rounded-md p-3 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t pt-8">
          <RainbowKitCustomConnectButton />
        </div>
      </div>
    </div>
  );
}
