import Link from "next/link";

const MomsMaternity = () => {
    const mainCategories = [
        { name: "Nursing & Sleep Wear", image: "/placeholder.svg" },
        { name: "Dresses & Skirts", image: "/placeholder.svg" },
        { name: "Lingerie", image: "/placeholder.svg" },
        { name: "Ethnic Wear", image: "/placeholder.svg" },
        { name: "Tops", image: "/placeholder.svg" },
        { name: "Bottom Wear", image: "/placeholder.svg" },
    ];

    const subCategories = [
        { name: "Maternity Support Accessories", image: "/placeholder.svg" },
        { name: "Nutrition & Lactation Supplements", image: "/placeholder.svg" },
        { name: "Breast Care", image: "/placeholder.svg" },
        { name: "Anti Stretch Marks Solutions", image: "/placeholder.svg" },
        { name: "Anti Ageing Solutions", image: "/placeholder.svg" },
        { name: "Pregnancy & Parenting Books", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                {/* Banner */}
                <div className="relative w-full aspect-[21/6] md:aspect-[21/4] mb-8 group cursor-pointer overflow-hidden rounded-sm">
                    <img src="/placeholder.svg" alt="Moms & Maternity" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            MOMS & MATERNITY
                        </h2>
                        <button className="bg-[#d9534f] text-white px-8 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-red-700 transition-colors">
                            SHOP NOW <span className="text-xl">›</span>
                        </button>
                    </div>
                </div>

                {/* Grid 1 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-2">
                    {mainCategories.map((item, idx) => (
                        <Link key={idx} href="/products" className="relative aspect-video md:aspect-square group overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <p className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-[10px] md:text-xs px-2 uppercase tracking-tighter">
                                {item.name} <span className="text-[10px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Grid 2 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {subCategories.map((item, idx) => (
                        <Link key={idx} href="/products" className="relative aspect-video md:aspect-square group overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <p className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-[10px] md:text-xs px-2 uppercase tracking-tighter">
                                {item.name} <span className="text-[10px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MomsMaternity;
