import Link from 'next/link'

export default function Navbar() {
    return <div className="max-w-7xl py-10 mx-auto">
        <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Link href="/" className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap">Logo</span>
            </Link>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <Link href="/articles" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Articles</Link>
                </li>
                <li>
                    <Link href="/categories" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Categories</Link>
                </li>
                <li>
                    <Link href="/users" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Users</Link>
                </li>
                <li>
                    <Link href="/notifications" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Notifications</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
}