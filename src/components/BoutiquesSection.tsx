import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BoutiquesSection = () => {
    // Placeholder data for boutiques
    const boutiques = [
        {
            id: 1,
            title: "SPRING'S ON | UPTO 35% OFF",
            description: "New Arrivals",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
        {
            id: 2,
            title: "BREATHABLE, STRETCHABLE",
            description: "Baby Approved",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
        {
            id: 3,
            title: "COZY ONESIES COLLECTION",
            description: "Explore Now",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
        {
            id: 4,
            title: "MODERN FITS, STYLE",
            description: "Shop Sets & More",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
        {
            id: 5,
            title: "POLISHED LOOKS",
            description: "Easy Comfort",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
        {
            id: 6,
            title: "SOFT LAYERS",
            description: "For Everyday",
            image: "/placeholder.svg",
            tag: "NEW TODAY",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8 uppercase tracking-wide text-gray-800">
                    Premium Boutiques
                </h2>

                <div className="relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {boutiques.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="group cursor-pointer">
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {/* Badge Overlay */}
                                            <div className="absolute top-0 left-0 bg-white/90 px-2 py-1 text-[10px] font-bold border-b border-r">
                                                UPTO <span className="text-lg block -mt-1">80%</span> OFF
                                            </div>

                                            {/* Text Overlay on Image */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                                <h3 className="text-white font-bold text-sm leading-tight uppercase">
                                                    {item.title.split('|')[0]}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Info Below Image */}
                                        <div className="mt-3 flex justify-between items-start">
                                            <div>
                                                <h4 className="text-[12px] font-bold text-gray-800 line-clamp-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 mt-0.5">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <span className="text-[10px] font-bold text-orange-500 whitespace-nowrap">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-md border-none hover:bg-orange-500 hover:text-white" />
                        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-md border-none hover:bg-orange-500 hover:text-white" />
                    </Carousel>
                </div>

                {/* View All Button */}
                <div className="mt-10 flex justify-center">
                    <Link to="/products" className="w-full max-w-4xl">
                        <Button variant="outline" className="w-full py-6 text-sm font-bold border-gray-200 text-gray-600 hover:bg-gray-50 uppercase tracking-widest shadow-sm">
                            View All Boutiques
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BoutiquesSection;
