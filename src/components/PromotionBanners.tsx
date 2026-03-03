import Link from "next/link";

const PromotionBanners = () => {
    return (
        <div className="bg-white py-6 flex flex-col gap-6">
            <div className="container mx-auto px-4">
                {/* Top Big Banner */}
                <Link href="/products" className="block w-full aspect-[21/7] md:aspect-[21/6] overflow-hidden rounded-sm mb-6 border border-gray-100 shadow-sm">
                    <img src="/placeholder.svg" alt="New Arrivals" className="w-full h-full object-cover" />
                </Link>

                {/* Two Gender Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Link href="/products?category=Boy" className="relative aspect-[21/9] md:aspect-[21/10] overflow-hidden rounded-sm group border border-gray-100 shadow-sm">
                        <img src="/placeholder.svg" alt="Boy Fashion" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-16 text-3xl font-display font-bold text-gray-800 flex items-center gap-1">
                            BOY <span className="text-xl">›</span>
                        </div>
                    </Link>
                    <Link href="/products?category=Girl" className="relative aspect-[21/9] md:aspect-[21/10] overflow-hidden rounded-sm group border border-gray-100 shadow-sm">
                        <img src="/placeholder.svg" alt="Girl Fashion" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-16 text-3xl font-display font-bold text-gray-800 flex items-center gap-1">
                            GIRL <span className="text-xl">›</span>
                        </div>
                    </Link>
                </div>

                {/* Budget Store Strip */}
                <div className="bg-[#f2f8f9] rounded-sm p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6 border border-gray-100">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black text-gray-800 leading-none">BUDGET</h2>
                        <h3 className="text-4xl font-black text-gray-800 leading-none -mt-1">STORE</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[299, 599, 799].map((price) => (
                            <Link key={price}
                                href={`/products?maxPrice=${price}`}
                                className="bg-white border-2 border-orange-500 rounded-full py-2 px-8 font-bold text-gray-800 hover:bg-orange-500 hover:text-white transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
                            >
                                UNDER <span className="text-blue-600 group-hover:text-white">{price}</span> <span className="text-xs">›</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionBanners;
