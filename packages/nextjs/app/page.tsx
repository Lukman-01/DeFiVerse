"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "~~/components/LandingPage/Footer";
import Navbar from "~~/components/Navbar";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth/RainbowKitCustomConnectButton";

const FeatureCard = ({ icon, title, description }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6"
    >
      <div className="text-5xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const StepCard = ({ number, title, description }: any) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-2xl mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-100">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-6xl font-bold mb-6 text-gray-900">Explore the Fundamentals of DeFi</h1>
            <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
              DefiVerse: Your interactive on-chain learning platform for mastering decentralized finance.
            </p>
            <Link
              href="/courses"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition"
            >
              Start Learning
            </Link>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center tracking-tight">
              Decentralized Finance (DeFi)
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left Column: What is DeFi */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">What is DeFi?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Decentralized Finance (DeFi) is a revolutionary concept in blockchain that removes intermediaries in
                  financial transactions, providing open access to financial services. It empowers individuals to gain
                  control over their assets, reduces costs, and fosters financial inclusion globally.
                </p>
              </div>

              {/* Right Column: Why Learn DeFi */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Learn DeFi?</h3>
                <ul className="space-y-4">
                  {[
                    "Gain financial sovereignty and control over your assets",
                    "Access innovative financial products and services",
                    "Participate in the future of finance and blockchain technology",
                    "Explore new career opportunities in a rapidly growing field",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                          <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
            Why Choose DefiVerse?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon="📚"
              title="Learn the Basics of DeFi"
              description="Understand key concepts and principles of decentralized finance with simplified explanations."
            />
            <FeatureCard
              icon="📝"
              title="Quiz to Retain Knowledge"
              description="Reinforce your learning with engaging quizzes designed to test your understanding."
            />
            <FeatureCard
              icon="🔑"
              title="Keywords Explained"
              description="Master DeFi terminology with concise keyword explanations."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard number={1} title="Connect Wallet" description="Link your wallet to get started with DefiVerse." />
            <StepCard
              number={2}
              title="Start Learning"
              description="Access a curated learning dashboard with topics tailored for you."
            />
            <StepCard
              number={3}
              title="Take a Course"
              description="Select a course, explore the content, and deepen your knowledge."
            />
            <StepCard
              number={4}
              title="Learn & Quiz"
              description="Study the material and complete quizzes to solidify your understanding."
            />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 tracking-tight">Ready to Start Your DeFi Journey?</h2>
          <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Join DefiVerse today and unlock the potential of decentralized finance.
          </p>
          <Link
            href="/dashboard/courses"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            Get Started Now
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
