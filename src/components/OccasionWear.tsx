import { Link } from "react-router-dom";

const OccasionWear = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8 uppercase tracking-widest text-gray-800">
                    Occasion Wear
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        to="/products"
                        className="group relative overflow-hidden rounded-sm border border-gray-100 shadow-sm aspect-[16/8] md:aspect-[16/9]"
                    >
                        <img src="/placeholder.svg" alt="Party Look" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-6 left-10 md:left-14 flex items-end gap-2 text-white">
                            <span className="text-3xl font-display font-medium">Party</span>
                            <span className="text-4xl font-display font-bold leading-none">LOOK</span>
                            <div className="mb-1 ml-2 flex items-center gap-1 text-xs">
                                Starting <span className="font-bold">₹399 </span> <span className="text-lg">›</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="/products"
                        className="group relative overflow-hidden rounded-sm border border-gray-100 shadow-sm aspect-[16/8] md:aspect-[16/9]"
                    >
                        <img src="/placeholder.svg" alt="Ethnic Ready" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-6 left-10 md:left-14 flex items-end gap-2 text-white">
                            <span className="text-3xl font-display font-medium uppercase tracking-tight">Ethnic</span>
                            <span className="text-4xl font-display font-bold leading-none">READY</span>
                            <div className="mb-1 ml-2 flex items-center gap-1 text-xs">
                                Starting <span className="font-bold">₹299 </span> <span className="text-lg">›</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OccasionWear;
