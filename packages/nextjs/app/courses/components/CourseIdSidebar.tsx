import { ChevronRight } from "lucide-react";

const CourseIdSidebar = ({
  sideOpen,
  data,
  changeSection,
  currentSectionIndex,
}: {
  sideOpen: boolean;
  changeSection: (index: number) => void;
  currentSectionIndex: number;
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
}) => {
  return (
    <div
      className={`${sideOpen ? "w-64" : "w-0 overflow-hidden"} max-lg:hidden transition-all duration-300 bg-white border-r`}
    >
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">{data.title}</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {data.data.map((section, index) => (
            <li key={index}>
              <button
                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                  currentSectionIndex === index
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => changeSection(index)}
              >
                <span className="mr-3">{section.icon}</span>
                <span className="text-left me-2">{section.title}</span>
                {currentSectionIndex === index && (
                  <ChevronRight className="w-4 h-4 shrink-0 ml-auto" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CourseIdSidebar;
