import { Link } from "react-router-dom";

const PersonalCare = () => {
    const items = [
        { name: "Facial Care", image: "/placeholder.svg" },
        { name: "Hair Care", image: "/placeholder.svg" },
        { name: "Appliances", image: "/placeholder.svg" },
        { name: "Feminine Hygiene & Care", image: "/placeholder.svg" },
        { name: "Body Care", image: "/placeholder.svg" },
        { name: "Health & Well Being", image: "/placeholder.svg" },
        { name: "Bathing Essentials", image: "/placeholder.svg" },
        { name: "Kits & Combos", image: "/placeholder.svg" },
        { name: "Sun Protection", image: "/placeholder.svg" },
        { name: "Eye & Lip Care", image: "/placeholder.svg" },
        { name: "Makeup & Cosmetics", image: "/placeholder.svg" },
        { name: "Hands & Feet Care", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 border-b-2 border-pink-100 pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase">
                        WOMEN'S <span className="text-pink-500">PERSONAL CARE</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-gray-100">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            to="/products"
                            className="bg-white group p-4 border-r border-b border-gray-100 hover:shadow-inner hover:bg-pink-50/10 transition-all flex flex-col items-center"
                        >
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-md">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                            </div>
                            <p className="text-[11px] md:text-sm font-bold text-gray-700 text-center uppercase tracking-tight group-hover:text-pink-600">
                                {item.name} <span className="text-[10px]">›</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalCare;
