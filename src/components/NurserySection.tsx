import { Link } from "react-router-dom";

const NurserySection = () => {
    const categories = [
        { name: "Baby Furniture", image: "/placeholder.svg" },
        { name: "Blankets & Swaddles", image: "/placeholder.svg" },
        { name: "Baby Bedding", image: "/placeholder.svg" },
        { name: "Mosquito Nets", image: "/placeholder.svg" },
        { name: "Storage Solutions", image: "/placeholder.svg" },
        { name: "Kids Furniture", image: "/placeholder.svg" },
        { name: "Kids Room Decor", image: "/placeholder.svg" },
        { name: "Travel Accessories", image: "/placeholder.svg" },
        { name: "Wall Papers & Stickers", image: "/placeholder.svg" },
        { name: "Clocks", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Banner */}
                <div className="relative w-full aspect-[21/6] md:aspect-[21/4] mb-8 group cursor-pointer overflow-hidden rounded-sm">
                    <img src="/placeholder.svg" alt="Nursery" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">
                            NURSERY
                        </h2>
                        <button className="bg-[#d9534f] text-white px-8 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-red-700 transition-colors">
                            SHOP NOW <span className="text-xl">›</span>
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                    {categories.map((item, idx) => (
                        <Link key={idx} to="/products" className="relative aspect-video md:aspect-square group overflow-hidden border border-gray-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                            <p className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-[10px] md:text-sm px-2 uppercase shadow-sm">
                                {item.name} <span className="text-[10px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NurserySection;
