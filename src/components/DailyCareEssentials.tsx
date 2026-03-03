import Link from "next/link";

interface CategoryItem {
    name: string;
    image: string;
}

interface SectionProps {
    title: string;
    bannerTitle: string;
    bannerBg: string;
    showShopNow?: boolean;
    subSections: {
        subTitle?: string;
        items: CategoryItem[];
    }[];
}

const CategoryShowcase = ({ bannerTitle, bannerBg, subSections, showShopNow = true }: SectionProps) => {
    return (
        <div className="bg-white mb-10">
            <div className="container mx-auto px-4">
                {/* Main Banner */}
                <div className={`relative w-full aspect-[21/4] md:aspect-[21/3] mb-4 rounded-sm overflow-hidden flex items-center justify-end pr-8 md:pr-20 ${bannerBg}`}>
                    <div className="text-right">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-2">
                            {bannerTitle}
                        </h2>
                        {showShopNow && (
                            <button className="bg-[#d9534f] text-white px-4 py-1 md:px-8 md:py-2 rounded-md text-xs md:text-sm font-bold flex items-center gap-1 float-right hover:bg-red-700 transition-colors">
                                SHOP NOW <span className="text-lg">›</span>
                            </button>
                        )}
                    </div>
                    {/* Overlay for image if needed */}
                    <div className="absolute inset-0 bg-black/10 -z-10" />
                    <img src="/placeholder.svg" alt={bannerTitle} className="absolute inset-0 w-full h-full object-cover -z-20" />
                </div>

                {subSections.map((sub, idx) => (
                    <div key={idx} className="mb-6">
                        {sub.subTitle && (
                            <div className="text-center py-2 border-b border-pink-100 mb-4">
                                <h3 className="text-lg md:text-xl font-bold text-gray-700 uppercase">
                                    {sub.subTitle.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 !== 0 ? "text-pink-500 ml-1" : ""}>{word}</span>
                                    ))}
                                </h3>
                            </div>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200">
                            {sub.items.map((item, itemIdx) => (
                                <Link key={itemIdx}
                                    href="/products"
                                    className="bg-white group p-2 flex flex-col items-center hover:shadow-inner transition-all"
                                >
                                    <div className="aspect-square w-full overflow-hidden mb-2">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-medium text-gray-700 text-center uppercase group-hover:text-pink-500">
                                        {item.name} <span className="text-[8px]">›</span>
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DailyCareEssentials = () => {
    const sections: SectionProps[] = [
        {
            title: "Daily Care Essentials",
            bannerTitle: "Daily Care Essentials",
            bannerBg: "bg-teal-800",
            subSections: [
                {
                    subTitle: "BABY DIAPERS & MORE",
                    items: [
                        { name: "Baby Diapers", image: "/placeholder.svg" },
                        { name: "Baby Wipes", image: "/placeholder.svg" },
                        { name: "Cloth Diapers", image: "/placeholder.svg" },
                        { name: "Rash Cream", image: "/placeholder.svg" },
                        { name: "Changing Mats", image: "/placeholder.svg" },
                        { name: "Diaper Bags", image: "/placeholder.svg" },
                        { name: "Potty Training", image: "/placeholder.svg" },
                    ]
                },
                {
                    subTitle: "BATH & SKINCARE",
                    items: [
                        { name: "Soaps & Wash", image: "/placeholder.svg" },
                        { name: "Lotions & Oils", image: "/placeholder.svg" },
                        { name: "Creams", image: "/placeholder.svg" },
                        { name: "Bathers & Tubs", image: "/placeholder.svg" },
                        { name: "Accessories", image: "/placeholder.svg" },
                        { name: "Grooming", image: "/placeholder.svg" },
                        { name: "Bath Time", image: "/placeholder.svg" },
                    ]
                }
            ]
        },
        {
            title: "Feeding & Kids Food",
            bannerTitle: "Feeding & Kids Food",
            bannerBg: "bg-gray-700",
            subSections: [
                {
                    items: [
                        { name: "Baby Food & Infant Formula", image: "/placeholder.svg" },
                        { name: "Feeding Bottles & Teats", image: "/placeholder.svg" },
                        { name: "Breast Feeding", image: "/placeholder.svg" },
                        { name: "Sippers & Cups", image: "/placeholder.svg" },
                        { name: "Kids Food & Nutrition", image: "/placeholder.svg" },
                        { name: "Bibs & Hanky", image: "/placeholder.svg" },
                        { name: "Dishes & Utensils", image: "/placeholder.svg" },
                        { name: "Sterilizers & Warmers", image: "/placeholder.svg" },
                        { name: "Teethers & Soothers", image: "/placeholder.svg" },
                        { name: "Feeding Accessories", image: "/placeholder.svg" },
                        { name: "Feeding Bottle Cleaning", image: "/placeholder.svg" },
                        { name: "Kitchen Appliances", image: "/placeholder.svg" },
                    ]
                }
            ]
        },
        {
            title: "Gear & Activity",
            bannerTitle: "Gear & Activity",
            bannerBg: "bg-green-700",
            subSections: [
                {
                    items: [
                        { name: "Strollers & Prams", image: "/placeholder.svg" },
                        { name: "Baby Carriers", image: "/placeholder.svg" },
                        { name: "Baby Carrycots", image: "/placeholder.svg" },
                        { name: "Car Seats", image: "/placeholder.svg" },
                        { name: "Baby Walkers", image: "/placeholder.svg" },
                        { name: "Ride-Ons & Scooters", image: "/placeholder.svg" },
                        { name: "Bouncers, Rockers & Swings", image: "/placeholder.svg" },
                        { name: "High Chairs & Booster Seats", image: "/placeholder.svg" },
                        { name: "Tricycles & Bikes", image: "/placeholder.svg" },
                        { name: "Battery Operated Ride-Ons", image: "/placeholder.svg" },
                        { name: "Skates & Skateboards", image: "/placeholder.svg" },
                        { name: "Protective Gear", image: "/placeholder.svg" },
                    ]
                }
            ]
        },
        {
            title: "Toys",
            bannerTitle: "Get ready for a magical time with toys",
            bannerBg: "bg-orange-600",
            subSections: [
                {
                    items: [
                        { name: "Educational Games", image: "/placeholder.svg" },
                        { name: "Soft Toys", image: "/placeholder.svg" },
                        { name: "Puzzles", image: "/placeholder.svg" },
                        { name: "Playgyms & Playmats", image: "/placeholder.svg" },
                        { name: "Baby Rattles", image: "/placeholder.svg" },
                        { name: "Board Games", image: "/placeholder.svg" },
                        { name: "Backyard Play", image: "/placeholder.svg" },
                        { name: "Building Blocks & Stacking Toys", image: "/placeholder.svg" },
                        { name: "Toy Cars & Remote Control Vehicles", image: "/placeholder.svg" },
                    ]
                }
            ]
        }
    ];

    return (
        <>
            {sections.map((section, idx) => (
                <CategoryShowcase key={idx} {...section} />
            ))}
        </>
    );
};

export default DailyCareEssentials;
