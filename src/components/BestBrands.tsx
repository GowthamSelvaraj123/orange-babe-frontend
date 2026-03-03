import Link from "next/link";

const BestBrands = () => {
    const brands = [
        { name: "babyhug", price: "109", image: "/placeholder.svg" },
        { name: "Pine kids", price: "179", image: "/placeholder.svg" },
        { name: "Ollington St.", price: "289", image: "/placeholder.svg" },
        { name: "Honeyhap", price: "199", image: "/placeholder.svg" },
        { name: "babyeye", price: "199", image: "/placeholder.svg" },
        { name: "Hello.", price: "299", image: "/placeholder.svg" },
        { name: "Kookie Kids", price: "199", image: "/placeholder.svg" },
        { name: "MARK & MIA", price: "299", image: "/placeholder.svg" },
        { name: "PrimoGino", price: "299", image: "/placeholder.svg" },
        { name: "Carter's", price: "329", image: "/placeholder.svg" },
        { name: "ADIDAS", price: "299", image: "/placeholder.svg" },
        { name: "Happy Hippo", price: "109", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-gray-500 italic">Top Picks From The</p>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tighter uppercase leading-none">
                        Best Brands
                    </h2>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                    {brands.map((brand, idx) => (
                        <Link key={idx}
                            href={`/products?brand=${brand.name}`}
                            className="text-center group"
                        >
                            <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3 border border-gray-100 group-hover:border-orange-200 group-hover:shadow-md transition-all">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                            <h4 className="font-bold text-gray-700 text-[11px] md:text-sm uppercase tracking-tight">
                                {brand.name}
                            </h4>
                            <p className="text-[10px] md:text-[11px] text-gray-500">Starting ₹{brand.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestBrands;
