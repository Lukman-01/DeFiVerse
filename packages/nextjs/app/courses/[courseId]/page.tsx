"use client";

import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import DeFiContracts from "../data/DeFiContracts";
import DeFiFundamentals from "../data/DeFiFundamentals";
import Dexes from "../data/Dexes";
import Lending from "../data/Lending";
import Oracles from "../data/Oracles";
import Stablecoins from "../data/Stablecoins";
import Synthetics from "../data/Synthetics";
import DeFiSecurity from "../data/DeFiSecurity";

interface CourseContent {
  title: string;
  description: string;
  category: string;
  content: string;
}

interface CourseData {
  [key: string]: CourseContent;
}

const CoursePage = () => {
  const params = useParams();
  const urlToTitle = decodeURIComponent(params.courseId as string);

  const [loading, setLoading] = React.useState(false);

  function getCourse(title: string) {
    switch (title) {
      case "DeFi Fundamentals":
        return <DeFiFundamentals />;
      case "DeFi Contracts":
        return <DeFiContracts />;
      case "Lending and Borrowing":
        return <Lending />;
      case "Oracles":
        return <Oracles />;
      case "Stablecoins":
        return <Stablecoins />;
      case "Synthetics and Derivatives":
        return <Synthetics />;
      case "DEXs":
        return <Dexes />;
      case "DeFi Security":
        return <DeFiSecurity />;
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!getCourse(urlToTitle)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate">Course Not Found</h2>
          <p className="mt-2 text-slate">The requested course could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow w-full">
        <div className="">
          <div className="prose max-w-none text-black/70">{getCourse(urlToTitle)}</div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
