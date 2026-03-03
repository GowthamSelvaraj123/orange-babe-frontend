import { Link } from "react-router-dom";

const FashionStaples = () => {
    const categories = [
        { title: "Tops", price: "109", image: "/placeholder.svg" },
        { title: "T-shirts", price: "109", image: "/placeholder.svg" },
        { title: "Sets & Suits", price: "159", image: "/placeholder.svg" },
        { title: "Frocks & Dresses", price: "109", image: "/placeholder.svg" },
        { title: "Shirts", price: "199", image: "/placeholder.svg" },
        { title: "Onesies & Rompers", price: "109", image: "/placeholder.svg" },
        { title: "Bottoms", price: "99", image: "/placeholder.svg" },
        { title: "Nightwear", price: "119", image: "/placeholder.svg" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8 uppercase tracking-widest text-gray-800">
                    Fashion Staples
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={`/products?category=${cat.title}`}
                            className="group relative overflow-hidden rounded-md border border-gray-100 shadow-sm aspect-square md:aspect-[4/5]"
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white px-2">
                                <h3 className="font-bold text-sm md:text-base mb-0.5">{cat.title} ›</h3>
                                <p className="text-[10px] md:text-xs">Starting ₹{cat.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FashionStaples;
