import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AgeCategorySection from "@/components/AgeCategorySection";
import BoutiquesSection from "@/components/BoutiquesSection";
import PromotionBanners from "@/components/PromotionBanners";
import FashionStaples from "@/components/FashionStaples";
import BestBrands from "@/components/BestBrands";
import OccasionWear from "@/components/OccasionWear";
import StrideStyle from "@/components/StrideStyle";
import DailyCareEssentials from "@/components/DailyCareEssentials";
import MomsMaternity from "@/components/MomsMaternity";
import PersonalCare from "@/components/PersonalCare";
import HealthSafety from "@/components/HealthSafety";
import NurserySection from "@/components/NurserySection";
import { BrandStrip, FranchiseBanner } from "@/components/BrandPromo";
import AuthorsBooksSection from "@/components/AuthorsBooksSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col gap-y-12 lg:gap-y-20 pb-20">
                <HeroSection />
                <PromotionBanners />
                <FashionStaples />
                <BoutiquesSection />
                <BestBrands />
                <OccasionWear />
                <StrideStyle />
                <DailyCareEssentials />
                <FranchiseBanner />
                <MomsMaternity />
                <PersonalCare />
                <HealthSafety />
                <NurserySection />
                <BrandStrip />
                <AuthorsBooksSection />
            </main>
            <Footer />
        </div>
    );
}
