import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-4 flex justify-between items-center border-b border-gray-800">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        VerifyInfluencers
      </h2>
      <ul className="flex space-x-4">
        <li>
          <Link href="/leaderboard" className="text-lg hover:text-blue-400">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-lg hover:text-blue-400">
            Products
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-lg hover:text-blue-400">
            Monetization
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-lg hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-lg hover:text-blue-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/admin" className="text-lg hover:text-blue-400">
            Admin
          </Link>
        </li>
        <li>
          <Link href="/" className="text-lg hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-lg hover:text-blue-400">
            Sing in
          </Link>
        </li>
        <li>
          <Link href="/register" className="text-lg hover:text-blue-400">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
