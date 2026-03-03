import { Link } from "react-router-dom";

const StrideStyle = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8 uppercase tracking-widest text-gray-800">
                    Stride in Style
                </h2>
                <div className="flex flex-col md:flex-row gap-4 overflow-hidden rounded-md border border-gray-100 shadow-sm">
                    {/* Accessories Side */}
                    <Link
                        to="/products?category=Accessories"
                        className="flex-1 group relative aspect-[21/9] md:aspect-auto"
                    >
                        <img src="/placeholder.svg" alt="Accessories" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all" />
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 flex flex-col items-start bg-white/80 p-4 rounded-sm shadow-sm border border-gray-100/50">
                            <span className="text-gray-800 font-bold text-lg border-2 border-gray-800 px-3 py-1 rounded-full mb-2 group-hover:bg-gray-800 group-hover:text-white transition-all">
                                Accessories ›
                            </span>
                            <span className="text-gray-600 font-bold text-sm">
                                Starting <span className="text-orange-600 text-lg">₹99</span>
                            </span>
                        </div>
                    </Link>

                    {/* Footwear Side */}
                    <Link
                        to="/products?category=Footwear"
                        className="flex-1 group relative aspect-[21/9] md:aspect-auto"
                    >
                        <img src="/placeholder.svg" alt="Footwear" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-12 flex flex-col items-end bg-white/80 p-4 rounded-sm shadow-sm border border-gray-100/50 text-right">
                            <span className="text-gray-800 font-bold text-lg border-2 border-gray-800 px-3 py-1 rounded-full mb-2 group-hover:bg-gray-800 group-hover:text-white transition-all">
                                Footwear ›
                            </span>
                            <span className="text-gray-600 font-bold text-sm">
                                Starting <span className="text-orange-600 text-lg">₹109</span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StrideStyle;
