"use client";
import React from 'react';
import Header from '../../../components/LandingPage/Header';
import Footer from '../../../components/LandingPage/Footer';
import { useRouter } from 'next/navigation';



const CourseCard = ({ handleClick, id, title, description, image, category }:any) => (
  <div onClick={() => handleClick(id)} className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-xs font-semibold px-2 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Start Learning →
        </button>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          {/* <span className="text-xs text-gray-400">8 lessons</span> */}
        </div>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const courses = [
    {
      "id": 1,
      "title": "DeFi Fundamentals",
      "description": "Learn the foundations of decentralized finance, including key principles, concepts, and the structure of DeFi protocols like lending, borrowing, and automated market makers.",
      "category": "Beginner",
      "image": "/fundamental.jpg"
    },
    {
      "id": 2,
      "title": "DeFi Contracts",
      "description": "Dive into the workings of DeFi contracts, covering topics like smart contract development, yield farming mechanics, and liquidity provisioning strategies.",
      "category": "Intermediate",
      "image": "/contract.jpg"
    },
    {
      "id": 3,
      "title": "Lending and Borrowing",
      "description": "Gain insights into decentralized lending and borrowing platforms, exploring how interest rates are determined and best practices for leveraging these tools.",
      "category": "Intermediate",
      "image": "/lend.jpg"
    },
    {
      "id": 4,
      "title": "Stablecoins",
      "description": "Understand the role of stablecoins in DeFi, their mechanisms for maintaining price stability, and their importance in creating a robust financial ecosystem.",
      "category": "Intermediate",
      "image": "/stable.jpg"
    },
    {
      "id": 5,
      "title": "Oracles",
      "description": "Learn how blockchain oracles provide off-chain data to smart contracts, and discover their applications in DeFi, prediction markets, and more.",
      "category": "Intermediate",
      "image": "/Oracle.jpg"
    },
    {
      "id": 6,
      "title": "Synthetics and Derivatives",
      "description": "Explore synthetic assets and decentralized derivatives, understanding their role in DeFi markets and strategies for leveraging them to mitigate risks.",
      "category": "Intermediate",
      "image": "/synthetix.jpg"
    },
    {
      "id": 7,
      "title": "DeFi Security",
      "description": "Understand the critical importance of security in DeFi, exploring smart contract vulnerabilities, best practices for audits, and how to secure your assets.",
      "category": "Advanced",
      "image": "/security.jpg"
    },
    {
      "id": 8,
      "title": "DEXs",
      "description": "Master the operation of decentralized exchanges (DEXs), covering automated market makers (AMMs), order books, and strategies for efficient trading.",
      "category": "Advanced",
      "image": "/dex.jpg"
    }
  ];

const router = useRouter();
const handleClick = (courseId: string) => {
    router.push(`/dashboard/courses/${courseId}`);
};	 
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Learning Journey
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated courses designed to take you from DeFi basics to advanced concepts.
          </p>
        </div>

        {/* Course Categories */}
        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Fundamentals', 'Advanced', 'Security', 'Development'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} handleClick={handleClick} />
            
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}