"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-20 text-center">
                    <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h1 className="text-2xl font-display font-bold mb-2">Your cart is empty</h1>
                    <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet!</p>
                    <Link href="/products">
                        <Button className="rounded-full px-8 gap-2">
                            Start Shopping <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const savings = items.reduce(
        (sum, i) => sum + (i.product.originalPrice - i.product.price) * i.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-6">
                    Shopping Cart ({totalItems} items)
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map(({ product, quantity }) => (
                            <div
                                key={product.id}
                                className="bg-card rounded-xl p-4 shadow-card flex gap-4"
                            >
                                <Link href={`/product/${product.id}`} className="shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover"
                                    />
                                </Link>
                                <div className="flex-1 min-w-0">
                                    <Link href={`/product/${product.id}`}>
                                        <h3 className="font-semibold text-sm md:text-base line-clamp-2 hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="font-bold">₹{product.price}</span>
                                        <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center bg-muted rounded-full">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-full"
                                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                            >
                                                <Minus className="h-3 w-3" />
                                            </Button>
                                            <span className="w-8 text-center font-semibold text-sm">{quantity}</span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-full"
                                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                            >
                                                <Plus className="h-3 w-3" />
                                            </Button>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:text-destructive"
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-card rounded-xl p-6 shadow-card h-fit sticky top-32 space-y-4">
                        <h2 className="font-display text-lg font-bold">Order Summary</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <div className="flex justify-between text-secondary">
                                <span>You Save</span>
                                <span className="font-semibold">-₹{savings}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Delivery</span>
                                <span className={totalPrice >= 499 ? "text-secondary font-semibold" : ""}>
                                    {totalPrice >= 499 ? "FREE" : "₹49"}
                                </span>
                            </div>
                        </div>
                        <div className="border-t border-border pt-3 flex justify-between items-center font-bold text-lg">
                            <span>Total</span>
                            <span>₹{totalPrice + (totalPrice >= 499 ? 0 : 49)}</span>
                        </div>
                        {totalPrice < 499 && (
                            <p className="text-xs text-muted-foreground">Add ₹{499 - totalPrice} more for free delivery!</p>
                        )}
                        <Link href="/checkout">
                            <Button className="w-full rounded-full font-semibold gap-2 mt-2" size="lg">
                                Proceed to Checkout <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
