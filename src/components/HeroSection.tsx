import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Using high-quality placeholder images for a better visual feel
  const banners = [
    { id: 1, image: "/placeholder.svg", alt: "Baby Skincare Sale - Flat 35% Off" },
    { id: 2, image: "/placeholder.svg", alt: "Kids Fashion - Accessorize to Shine" },
    { id: 3, image: "/placeholder.svg", alt: "Nursery Essentials - Best Deals" },
  ];

  return (
    <section className="w-full bg-white relative pb-6">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="pl-0">
              <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[3.5/1] overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Centered Vertically */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <CarouselPrevious className="static translate-x-0 h-10 w-10 bg-white/90 hover:bg-orange-500 hover:text-white text-gray-800 border-none shadow-lg transition-all" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <CarouselNext className="static translate-x-0 h-10 w-10 bg-white/90 hover:bg-orange-500 hover:text-white text-gray-800 border-none shadow-lg transition-all" />
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === current ? "bg-orange-500 w-6" : "bg-white/60"
                }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;

