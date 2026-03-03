import { Link } from "react-router-dom";

const AuthorsBooksSection = () => {
    const authors = [
        "J K ROWLING", "ROALD DAHL", "RUSKIN BOND", "DR SEUSS",
        "SUDHA MURTY", "JEFF KINNEY", "RICK RIORDAN", "ENID BLYTON"
    ];

    const sportsItems = [
        { name: "Cricket", image: "/placeholder.svg" },
        { name: "Football", image: "/placeholder.svg" },
        { name: "Badminton", image: "/placeholder.svg" },
        { name: "Basketball", image: "/placeholder.svg" },
        { name: "Volleyball", image: "/placeholder.svg" },
        { name: "Swimming", image: "/placeholder.svg" },
    ];

    const gadgetsItems = [
        { name: "Smartwatch", image: "/placeholder.svg" },
        { name: "Headphones", image: "/placeholder.svg" },
        { name: "Camera", image: "/placeholder.svg" },
        { name: "Speakers", image: "/placeholder.svg" },
        { name: "Video Games", image: "/placeholder.svg" },
        { name: "Laptop & Computer Accessories", image: "/placeholder.svg" },
    ];

    const bookCategories = [
        { name: "Story Books", image: "/placeholder.svg" },
        { name: "Drawing & Coloring Books", image: "/placeholder.svg" },
        { name: "Comics", image: "/placeholder.svg" },
        { name: "Rhymes & Poetry", image: "/placeholder.svg" },
        { name: "Crafts & Activity", image: "/placeholder.svg" },
        { name: "Academic Books", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Authors Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#a066a8] uppercase tracking-wide">
                        Authors
                    </h2>
                </div>

                {/* Authors List Bar */}
                <div className="grid grid-cols-4 md:grid-cols-8 border border-pink-100 mb-10 overflow-hidden rounded-sm">
                    {authors.map((author, idx) => (
                        <div key={idx} className="bg-[#fdf2f2] p-2 text-center border-r border-pink-100 last:border-0 hover:bg-pink-100 transition-colors cursor-pointer">
                            <span className="text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-tighter">
                                {author}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Sports & Gadgets Promo Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="relative aspect-[21/8] md:aspect-[21/7] rounded-sm overflow-hidden group cursor-pointer">
                        <img src="/placeholder.svg" alt="Sports" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-end pr-8 md:pr-12">
                            <div className="text-right">
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">Sports</h3>
                                <button className="bg-[#d9534f] text-white px-6 py-1.5 rounded-md font-bold text-xs md:text-sm flex items-center gap-1 float-right hover:bg-red-700 transition-colors">
                                    SHOP NOW <span className="text-lg">›</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[21/8] md:aspect-[21/7] rounded-sm overflow-hidden group cursor-pointer">
                        <img src="/placeholder.svg" alt="Gadgets" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-end pr-8 md:pr-12">
                            <div className="text-right">
                                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">Gadgets</h3>
                                <button className="bg-[#d9534f] text-white px-6 py-1.5 rounded-md font-bold text-xs md:text-sm flex items-center gap-1 float-right hover:bg-red-700 transition-colors">
                                    SHOP NOW <span className="text-lg">›</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sports & Gadgets Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-gray-200 border border-gray-200 mb-12">
                    {[...sportsItems, ...gadgetsItems].map((item, idx) => (
                        <Link key={idx} to="/products" className="bg-[#fff4e6] group p-2 md:p-4 flex flex-col items-center hover:bg-white transition-all">
                            <div className="aspect-square w-full mb-2 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                            </div>
                            <p className="text-[10px] md:text-[11px] font-bold text-gray-700 text-center uppercase group-hover:text-orange-600 line-clamp-2 min-h-[32px] flex items-center justify-center">
                                {item.name} <span className="text-[8px] ml-1">›</span>
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Build Your Own Library Section */}
                <div className="relative w-full aspect-[21/5] md:aspect-[21/3] mb-4 rounded-sm overflow-hidden group cursor-pointer flex items-center p-8 md:p-16">
                    <img src="/placeholder.svg" alt="Library" className="absolute inset-0 w-full h-full object-cover -z-10" />
                    <div className="z-10">
                        <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg">
                            BUILD YOUR OWN LIBRARY
                        </h2>
                        <button className="bg-[#d9534f] text-white px-8 py-2 rounded-md font-bold text-sm md:text-lg flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg">
                            SHOP NOW <span className="text-xl">›</span>
                        </button>
                    </div>
                </div>

                {/* Book Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-6 border border-gray-100 mb-6 gap-px bg-gray-100">
                    {bookCategories.map((cat, idx) => (
                        <Link key={idx} to="/products" className="bg-white group p-4 flex flex-col items-center hover:bg-gray-50 transition-all">
                            <div className="aspect-square w-full mb-3 overflow-hidden">
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                            </div>
                            <p className="text-[10px] md:text-xs font-bold text-gray-700 text-center uppercase group-hover:text-blue-600">
                                {cat.name} <span className="text-[10px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Specialty Books Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <Link to="/products" className="relative group overflow-hidden bg-[#fdf2f2] border border-pink-100 flex flex-col items-center">
                        <div className="p-8 aspect-[4/3] w-full flex items-center justify-center">
                            <img src="/placeholder.svg" alt="Board Books" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="bg-[#f0d8d8] w-full py-2 text-center">
                            <p className="text-xs font-bold text-gray-700 uppercase">Board Books ›</p>
                        </div>
                    </Link>

                    <Link to="/products" className="relative group overflow-hidden bg-[#fff9f9] border border-pink-100 flex flex-col items-center">
                        <div className="p-8 aspect-[4/3] w-full flex items-center justify-center">
                            <img src="/placeholder.svg" alt="Pregnancy & Parenting" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="bg-[#f0d8d8] w-full py-2 text-center mt-auto">
                            <p className="text-xs font-bold text-gray-700 uppercase">Pregnancy & Parenting Books ›</p>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-1">
                        <Link to="/products" className="bg-[#fcf7ff] border border-purple-100 p-4 flex justify-between items-center group flex-1">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border-2 border-orange-200 rounded-sm flex items-center justify-center text-orange-400 font-bold">ABC</div>
                                <span className="font-bold text-gray-700 uppercase text-xs">Pre-School ›</span>
                            </div>
                        </Link>
                        <Link to="/products" className="bg-[#ffffeb] border border-yellow-100 p-4 flex justify-between items-center group flex-1">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border-2 border-green-200 rounded-sm flex items-center justify-center text-green-400 font-bold">🌐</div>
                                <span className="font-bold text-gray-700 uppercase text-xs">Encyclopedia ›</span>
                            </div>
                        </Link>
                        <Link to="/products" className="bg-[#f1fbff] border border-blue-100 p-4 flex justify-between items-center group flex-1">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 border-2 border-blue-200 rounded-sm flex items-center justify-center text-blue-400 font-bold">📚</div>
                                <span className="font-bold text-gray-700 uppercase text-xs">Fact Books ›</span>
                            </div>
                        </Link>
                        <div className="bg-[#f0d8d8] w-full py-2 text-center mt-auto">
                            <p className="text-xs font-bold text-gray-700 uppercase">Reading & Learning Books ›</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorsBooksSection;
