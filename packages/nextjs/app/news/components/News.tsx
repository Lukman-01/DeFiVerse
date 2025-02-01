"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Loader2,
  Search,
  Shield,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Pagination from "~~/components/Pagination";
import Filter from "./Filter";

type Category = "All" | "Technology" | "Market" | "Security" | "Regulation";

export const categories = [
  "All",
  "Technology",
  "Market",
  "Security",
  "Regulation",
];

const dataPerPage = 12;

const startIndex = (currentPage: number) => {
  return (currentPage - 1) * dataPerPage;
};
const endIndex = (currentPage: number) => {
  return currentPage * dataPerPage;
};

type NewsArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  category: Category;
  isFeatured?: boolean;
  date: string;
  readTime: string;
  img: string;
};

const DeFiNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categorizeArticle = (categories: string[]): Category => {
    if (categories.some((cat) => cat.toLowerCase().includes("security")))
      return "Security";
    if (categories.some((cat) => cat.toLowerCase().includes("technology")))
      return "Technology";
    if (categories.some((cat) => cat.toLowerCase().includes("market")))
      return "Market";
    if (categories.some((cat) => cat.toLowerCase().includes("regulation")))
      return "Regulation";
    return "Technology"; // default category
  };

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
        {
          headers: {
            Authorization: `Apikey ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      console.log("News, ", data);

      // Transform CryptoCompare API data to match our NewsArticle type
      if (data.Data) {
        const transformedNews: NewsArticle[] = data.Data.map(
          (article: any, index: number) => ({
            id: index + 1,
            title: article.title,
            description: article.body.slice(0, 120) + "...",
            url: article.url,
            category: categorizeArticle(article.categories.split("|")),
            isFeatured: index === 0, // Make the first article featured
            date: new Date(article.published_on * 1000)
              .toISOString()
              .split("T")[0],
            readTime: `${Math.ceil(article.body.split(" ").length / 200)} min`,
            img: article.imageurl || article.source_info.img || "",
          }),
        );

        setNews(transformedNews);
      } else {
        throw new Error("Invalid API response format");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch news");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch news on component mount and every 5 minutes
  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const categoryIcons = {
    Technology: <Wallet className="w-5 h-5" />,
    Market: <TrendingUp className="w-5 h-5" />,
    Security: <Shield className="w-5 h-5" />,
  };

  const filteredNews = news.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = news.find((article) => article.isFeatured);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchNews}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-100 shadow">
        <div className="max-w-7xl gap-5 mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">DeFi News</h1>
          <div className="relative max-w-[350px] ms-auto w-full flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="lg:flex gap-2 hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category as Category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                disabled={category === selectedCategory}
              >
                {category}
              </button>
            ))}
          </div>
          <Filter
            currentCategory={selectedCategory}
            changeCategory={(category) =>
              setSelectedCategory(category as Category)
            }
          />
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative w-full overflow-hidden aspect-[3/1]">
                  <Image
                    src={featuredArticle.img}
                    alt={featuredArticle.title}
                    layout="fill"
                    className="object-center object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-500">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {featuredArticle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{featuredArticle.date}</span>
                      <span>{featuredArticle.readTime} read</span>
                    </div>
                    <a
                      href={featuredArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {filteredNews
                .slice(startIndex(currentPage), endIndex(currentPage))
                .map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full overflow-hidden aspect-[2/1]">
                      <Image
                        src={article.img}
                        alt={article.title}
                        layout="fill"
                        className="object-center object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {
                          categoryIcons[
                            article.category as keyof typeof categoryIcons
                          ]
                        }
                        <span className="text-sm font-medium text-gray-600">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span>{article.readTime} read</span>
                        </div>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                        >
                          Read <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            <div className="flex items-center flex-wrap justify-center gap-2 mb-20 mt-10">
              <Pagination
                currentPage={currentPage}
                itemPerPage={dataPerPage}
                totalLenght={filteredNews.length}
                onPage={(page: number) => setCurrentPage(page)}
                onNext={() => setCurrentPage(currentPage + 1)}
                onPrev={() => setCurrentPage(currentPage - 1)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeFiNews;
