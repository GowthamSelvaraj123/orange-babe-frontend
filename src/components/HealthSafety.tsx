import Link from "next/link";

const HealthSafety = () => {
    const items = [
        { name: "Cleansers & Detergents", image: "/placeholder.svg" },
        { name: "Oral Care", image: "/placeholder.svg" },
        { name: "Childproofing & Safety", image: "/placeholder.svg" },
        { name: "Medical Care", image: "/placeholder.svg" },
        { name: "Protection Face Masks & Gear", image: "/placeholder.svg" },
        { name: "Mosquito Repellents", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-0 bg-pink-50/50 py-4 border-t border-x border-pink-100 rounded-t-lg">
                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-widest text-gray-800">
                        HEALTH & SAFETY
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-pink-100 mb-10">
                    {items.map((item, idx) => (
                        <Link key={idx}
                            href="/products"
                            className="bg-white group p-4 border-r border-b border-pink-100 hover:bg-orange-50/20 transition-all flex flex-col items-center"
                        >
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-md">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                            </div>
                            <p className="text-[10px] md:text-xs font-bold text-gray-700 text-center uppercase leading-tight group-hover:text-orange-600">
                                {item.name} <span className="text-[8px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthSafety;
