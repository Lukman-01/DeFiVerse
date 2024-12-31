import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">DefiVerse</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Keywords</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">News</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">DEXs</a></li>
            <li><Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

