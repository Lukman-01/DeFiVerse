"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import CourseIdSidebar from "./CourseIdSidebar";
import CourseIdMobileSideBar from "./CourseIdMobileSidebar";

export default function CourseIdPage({
  data,
}: {
  data: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    data: {
      title: string;
      icon: JSX.Element;
      component: JSX.Element;
    }[];
  };
}) {
  const [selectedSection, setSelectedSection] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const sections = data.data;

  useEffect(() => {
    function handleResize() {
      setSidebarOpen(window.innerWidth >= 1024);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative overflow-hidden h-dvh">
      {/* Sidebar */}
      <CourseIdSidebar
        data={data}
        sideOpen={isSidebarOpen}
        currentSectionIndex={selectedSection}
        changeSection={(index) => setSelectedSection(index)}
      />
      <CourseIdMobileSideBar
        data={data}
        sideOpen={isSidebarOpen}
        currentSectionIndex={selectedSection}
        changeSection={(index) => setSelectedSection(index)}
        handleClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 shadow-sm">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 mr-4"
            >
              <ChevronRight
                className={`w-5 h-5 max-lg:hidden transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : ""}`}
              />
              <Menu
                className={`size-5 lg:hidden transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : ""}`}
              />
            </button>
            <h2 className="text-xl font-semibold">
              {sections[selectedSection].title}
            </h2>
          </div>
        </header>

        <main className="flex-1 overflow-auto lg:px-4 py-4">
          <div className="bg-white lg:shadow-sm rounded-lg lg:p-6">
            <div className="min-h-[200px]">
              {sections[selectedSection].component}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
