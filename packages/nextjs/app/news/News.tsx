"use client"

import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Shield, Wallet, ArrowRight, Star, Loader2 } from 'lucide-react';

type Category = 'All' | 'Technology' | 'Market' | 'Security' | 'Regulation';

type NewsArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  category: Category;
  isFeatured?: boolean;
  date: string;
  readTime: string;
};

const DeFiNews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categorizeArticle = (categories: string[]): Category => {
    if (categories.some(cat => cat.toLowerCase().includes('security'))) return 'Security';
    if (categories.some(cat => cat.toLowerCase().includes('technology'))) return 'Technology';
    if (categories.some(cat => cat.toLowerCase().includes('market'))) return 'Market';
    if (categories.some(cat => cat.toLowerCase().includes('regulation'))) return 'Regulation';
    return 'Technology'; // default category
  };

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN', {
        headers: {
          'Authorization': `Apikey ${process.env.NEXT_PUBLIC_API_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      
      // Transform CryptoCompare API data to match our NewsArticle type
      if (data.Data) {
        const transformedNews: NewsArticle[] = data.Data.map((article: any, index: number) => ({
          id: index + 1,
          title: article.title,
          description: article.body.slice(0, 150) + '...',
          url: article.url,
          category: categorizeArticle(article.categories.split('|')),
          isFeatured: index === 0, // Make the first article featured
          date: new Date(article.published_on * 1000).toISOString().split('T')[0],
          readTime: `${Math.ceil(article.body.split(' ').length / 200)} min`
        }));

        setNews(transformedNews);
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
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

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = news.find(article => article.isFeatured);

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
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">DeFi News</h1>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Technology', 'Market', 'Security', 'Regulation'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-500">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredArticle.description}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {categoryIcons[article.category as keyof typeof categoryIcons]}
                      <span className="text-sm font-medium text-gray-600">{article.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default DeFiNews;