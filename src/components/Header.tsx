import { Link } from "react-router-dom";
import { ShoppingCart, Search, Heart, MapPin, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";

import logo from "@/assets/logo.jpeg";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="OrangeBabe Logo"
            className="h-10 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative group hidden sm:block">
          <Input
            placeholder="Search for a Category, Brand or Product"
            className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-md focus-visible:ring-0 focus-visible:border-orange-500 text-sm placeholder:text-gray-400"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Right Utility Links */}
        <div className="flex items-center gap-2 lg:gap-4 text-[10px] lg:text-[11px] font-medium text-gray-600 whitespace-nowrap">
          <div className="hidden lg:flex items-center gap-1 hover:text-orange-500 cursor-pointer group">
            <MapPin className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
            <span>Select location</span>
          </div>
          <div className="hidden lg:block border-l h-3 border-gray-300 mx-0.5" />
          <span className="hidden md:block hover:text-orange-500 cursor-pointer">Stores & Preschools</span>
          <div className="hidden md:block border-l h-3 border-gray-300 mx-0.5" />
          <span className="hidden md:block hover:text-orange-500 cursor-pointer">Support</span>
          <div className="hidden md:block border-l h-3 border-gray-300 mx-0.5" />
          <span className="hidden md:block hover:text-orange-500 cursor-pointer">Track Order</span>
          <div className="hidden md:block border-l h-3 border-gray-300 mx-0.5" />
          <span className="hidden md:block hover:text-orange-500 cursor-pointer">OrangeBabe Parenting</span>
          <div className="hidden md:block border-l h-3 border-gray-300 mx-0.5" />
          <span className="hover:text-orange-500 cursor-pointer">LogIn / Register</span>

          <div className="flex items-center gap-1 ml-2 hover:text-orange-500 cursor-pointer group">
            <Heart className="h-5 w-5 text-gray-500 group-hover:text-orange-500" />
            <span className="text-[12px] hidden lg:block">Shortlist</span>
          </div>

          <Link to="/cart" className="flex items-center gap-1 ml-2 group relative">
            <div className="relative">
              <ShoppingCart className="h-7 w-7 text-gray-500 group-hover:text-orange-500" />
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <div className="flex flex-col -gap-1 ml-0.5">
              <span className="text-[12px] font-bold text-gray-700 group-hover:text-orange-500 leading-none mt-1">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar - show only on smallest screens if needed */}
      <div className="sm:hidden px-4 pb-2">
        <div className="relative group">
          <Input
            placeholder="Search for toys, clothes..."
            className="w-full h-9 pl-4 pr-10 border border-gray-300 rounded-sm focus-visible:ring-0 focus-visible:border-orange-500 text-sm"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="bg-[#ff8500] w-full shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
          <nav className="flex items-center gap-4 lg:gap-6 py-1.5">
            <div className="flex items-center gap-1 text-[12px] font-bold text-white cursor-pointer hover:bg-black/5 px-2 py-1 rounded transition-colors uppercase whitespace-nowrap">
              All Categories <ChevronDown className="h-3 w-3" />
            </div>
            {[
              "BOY FASHION", "GIRL FASHION", "FOOTWEAR", "TOYS", "DIAPERING",
              "GEAR", "FEEDING", "BATH", "NURSERY", "MOMS", "HEALTH", "BOUTIQUES"
            ].map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${cat}`}
                className="text-[11px] font-bold text-white hover:text-white transition-colors whitespace-nowrap uppercase px-1"
              >
                {cat}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-4 ml-4 shrink-0">
            <div className="flex items-center">
              <span className="text-[#002e6d] font-black text-lg italic tracking-tighter">Club</span>
            </div>
            <div className="text-black font-serif italic text-lg font-bold tracking-tight border-l border-gray-400 pl-4 py-1">
              Disney
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

