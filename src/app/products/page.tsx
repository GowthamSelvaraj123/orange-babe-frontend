"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, ageGroups, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

function ProductsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [showFilters, setShowFilters] = useState(false);

    const activeCategory = searchParams.get("category") || "";
    const activeAge = searchParams.get("age") || "";

    const filtered = useMemo(() => {
        return products.filter((p) => {
            if (activeCategory && p.category !== activeCategory) return false;
            if (activeAge && p.ageGroup !== activeAge) return false;
            return true;
        });
    }, [activeCategory, activeAge]);

    const setFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) params.set(key, value);
        else params.delete(key);
        router.push(`/products?${params.toString()}`);
    };

    const clearFilters = () => router.push('/products');

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-display font-bold">
                            {activeCategory || "All Products"}
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            {filtered.length} products found
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="md:hidden gap-2"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal className="h-4 w-4" /> Filters
                    </Button>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <aside
                        className={`${showFilters ? "block" : "hidden"
                            } md:block w-full md:w-56 shrink-0 space-y-6 ${showFilters ? "fixed inset-0 z-50 bg-background p-6 overflow-y-auto md:static md:p-0" : ""}`}
                    >
                        {showFilters && (
                            <div className="flex justify-between items-center md:hidden mb-4">
                                <h2 className="font-display font-bold text-lg">Filters</h2>
                                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        )}

                        {(activeCategory || activeAge) && (
                            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-primary gap-1 mb-2">
                                <X className="h-3 w-3" /> Clear All
                            </Button>
                        )}

                        {/* Age Group */}
                        <div>
                            <h3 className="font-semibold mb-3 text-sm">Age Group</h3>
                            <div className="space-y-1">
                                {ageGroups.map((ag) => (
                                    <button
                                        key={ag.id}
                                        onClick={() => setFilter("age", activeAge === ag.id ? "" : ag.id)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeAge === ag.id
                                                ? "bg-primary text-primary-foreground font-semibold"
                                                : "hover:bg-muted"
                                            }`}
                                    >
                                        {ag.emoji} {ag.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <h3 className="font-semibold mb-3 text-sm">Category</h3>
                            <div className="space-y-1">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter("category", activeCategory === cat ? "" : cat)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeCategory === cat
                                                ? "bg-primary text-primary-foreground font-semibold"
                                                : "hover:bg-muted"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {showFilters && (
                            <Button className="w-full md:hidden" onClick={() => setShowFilters(false)}>
                                Show {filtered.length} Products
                            </Button>
                        )}
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filtered.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-4xl mb-4">😔</p>
                                <h3 className="font-display text-xl font-bold mb-2">No products found</h3>
                                <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {filtered.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
