"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function DataPage({
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

  return (
    <div className="flex h-screen bg-black-500">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"} transition-all duration-300 bg-white border-r`}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">{data.title}</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                    selectedSection === index ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSection(index)}
                >
                  <span className="mr-3">{section.icon}</span>
                  <span className="text-left me-2">{section.title}</span>
                  {selectedSection === index && <ChevronRight className="w-4 h-4 shrink-0 ml-auto" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 shadow-sm">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 mr-4">
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-200 ${isSidebarOpen ? "rotate-180" : ""}`}
              />
            </button>
            <h2 className="text-xl font-semibold">{sections[selectedSection].title}</h2>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">
          <div>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="min-h-[200px]">{sections[selectedSection].component}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
