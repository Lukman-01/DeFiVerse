import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileNotAvailable() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 h-[calc(100dvh-64px)] backdrop-blur p-5 bottom-0 bg-black/50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <button
        className="absolute top-8 right-8 text-white text-2xl"
        onClick={() => setOpen(false)}
      >
        <X className="size-8" />
      </button>
      <div className="p-5 min-h-[200px] flex items-center justify-center bg-white rounded-lg max-w-[550px]">
        <span className="text-xl sm:text-2xl font-medium text-black text-center">
          Best view on desktops and tablets
        </span>
      </div>
    </div>
  );
}
