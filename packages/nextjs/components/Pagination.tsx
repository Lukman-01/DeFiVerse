"use client";

import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  itemPerPage,
  totalLenght,
  currentPage,
  onPrev,
  onNext,
  onPage,
}: {
  itemPerPage: number;
  totalLenght: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (page: number) => void;
}) {
  if (totalLenght <= itemPerPage) return;

  return (
    <>
      <SpecialButton onClick={onPrev} disabled={currentPage === 1} icon={<ChevronLeft />} />
      {Array.from({ length: Math.ceil(totalLenght / itemPerPage) }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPage(index + 1)}
          className={`rounded-md w-[50px] h-[40px] shrink-0 outline-0 text-base font-medium shadow-lg border active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-200 ${currentPage === index + 1 ? "text-white bg-[#2563eb] border-[#2563eb] hover:bg-[#2563eb]/85" : "text-gray-600 border-gray-600/[10%] bg-white hover:bg-black/[0.02]"}`}
        >
          {index + 1}
        </button>
      ))}
      <SpecialButton onClick={onNext} disabled={currentPage >= totalLenght / itemPerPage} icon={<ChevronRight />} />
    </>
  );
}

function SpecialButton({ onClick, disabled, icon }: { onClick: () => void; disabled: boolean; icon: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md shrink-0 flex items-center justify-center w-[50px] h-[40px] outline-0 text-base font-medium shadow-lg text-gray-600 border-gray-600/[10%] bg-white hover:bg-black/[0.02] border disabled:pointer-events-none disabled:bg-black/10 active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-200`}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
