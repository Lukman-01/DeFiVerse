"use client";

import React, { useState } from "react";
import Pagination from "../Pagination";
import { BookOpen, Search } from "lucide-react";
import { keywords } from "~~/app/keywords/data";

const itemPerPage = 10;
const startIndex = (currentPage: number) => {
  return (currentPage - 1) * itemPerPage;
};
const endIndex = (currentPage: number) => {
  return currentPage * itemPerPage;
};

const KeywordCard = ({ keyword }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
    <h2 className="text-2xl font-bold text-blue-700 mb-3">{keyword.term}</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">What is it?</h3>
        <p className="text-gray-600 leading-relaxed">{keyword.description}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Example</h3>
        <p className="text-gray-600 leading-relaxed italic">{keyword.example}</p>
      </div>
    </div>
  </div>
);

const FeaturesDefiKeywordsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredKeywords = keywords.filter(
    keyword =>
      keyword.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      keyword.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">DeFi Terms Explained</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master the essential terminology of decentralized finance (DeFi). Each term includes a detailed explanation
            and real-world example to help you understand these important concepts.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search DeFi terms..."
            className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredKeywords.slice(startIndex(currentPage), endIndex(currentPage)).map((keyword, index) => (
            <KeywordCard key={index} keyword={keyword} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <Pagination
            currentPage={currentPage}
            totalLenght={keywords.length}
            onPage={page => setCurrentPage(page)}
            onNext={() => setCurrentPage(currentPage + 1)}
            onPrev={() => setCurrentPage(currentPage - 1)}
            itemPerPage={itemPerPage}
          />
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Showing {filteredKeywords.length} of {keywords.length} DeFi terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDefiKeywordsPage;
