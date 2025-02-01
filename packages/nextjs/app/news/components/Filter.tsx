import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "~~/utils/utils";
import { categories } from "./News";

export default function Filter({
  currentCategory,
  changeCategory,
}: {
  currentCategory: string;
  changeCategory: (category: string) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden relative">
      <button
        className="px-4 py-2 rounded-lg text-sm flex items-center gap-2 font-semibold transition-colors bg-blue-600 text-white"
        onClick={() => setOpen(!open)}
      >
        {currentCategory}
        <ChevronDown
          className={cn("transition-all duration-300 size-5", {
            "rotate-180": open,
          })}
        />

        {open && (
          <div className="min-w-[200px] overflow-hidden rounded-md border-2 shadow-sm min-h-[100px] absolute right-0 z-[5] bg-white top-[calc(100%+4px)]">
            {categories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  "w-full text-left px-4 py-2 bg-white text-[15px] font-normal text-gray-600 hover:bg-gray-100 transition-all duration-300",
                  {
                    "bg-blue-600 text-white hover:bg-blue-600/90":
                      category === currentCategory,
                  },
                )}
                onClick={() => {
                  changeCategory(category);
                  setOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
