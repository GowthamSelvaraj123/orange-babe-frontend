import { Link } from "react-router-dom";

const BrandStrip = () => {
    // Top Brands logos - in a real app these would be actual logo SVGs/Images
    const brands = [
        "HUGGIES", "PAMPERS", "MamyPoko", "PEGASUS", "pigeon", "carter's", "CHHOTA BHEEM", "LEGO", "timios", "GINI & JONY", "Fisher-Price", "babyoye", "Barbie"
    ];

    return (
        <section className="bg-white border-y border-gray-100 py-4 mb-10 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center">
                <div className="flex items-center gap-2 pr-6 border-r border-gray-200 shrink-0">
                    <div className="text-gray-600 font-black text-xs md:text-sm leading-tight text-right uppercase italic">
                        Top <br /> Brands
                    </div>
                    <span className="text-red-500 text-2xl font-bold">›</span>
                </div>

                <div className="flex items-center gap-10 overflow-x-auto no-scrollbar px-6">
                    {brands.map((brand, idx) => (
                        <Link
                            key={idx}
                            to={`/products?brand=${brand}`}
                            className="shrink-0 text-[10px] md:text-sm font-bold text-gray-400 hover:text-orange-500 uppercase tracking-widest whitespace-nowrap"
                        >
                            {/* In a real app, this would be an <img src={brandLogo} /> */}
                            {brand}
                        </Link>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            ` }} />
        </section>
    );
};

const FranchiseBanner = () => {
    return (
        <section className="container mx-auto px-4 mb-10">
            <Link to="/franchise" className="block relative w-full aspect-[21/6] md:aspect-[21/4] rounded-md overflow-hidden shadow-sm group">
                <img src="/placeholder.svg" alt="Franchise Opportunity" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-green-900/40 flex items-center p-8 md:p-16">
                    <div className="max-w-xl text-white">
                        <h2 className="text-xl md:text-4xl font-black leading-tight mb-2 uppercase drop-shadow-md">
                            Here's Your Big Opportunity! <br />
                            <span className="text-white">Be a Franchise Owner!</span>
                        </h2>
                        <button className="bg-[#e91e63] text-white px-8 py-3 rounded-full font-bold text-sm md:text-lg hover:bg-pink-700 transition-all shadow-lg mt-4">
                            Own a Preschool
                        </button>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export { BrandStrip, FranchiseBanner };
