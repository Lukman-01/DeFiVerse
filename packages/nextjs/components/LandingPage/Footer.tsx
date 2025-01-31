import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DefiVerse</h3>
            <p className="text-sm text-gray-400">
              Empowering the future of finance through education.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/keywords" className="hover:text-blue-400">
                  Keywords
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400">
                  News
                </Link>
              </li>
              <li>
                <Link href="/dexs" className="hover:text-blue-400">
                  Dexes
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-blue-400">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DefiVerse. All rights reserved 2025.
        </div>
      </div>
    </footer>
  );
}

