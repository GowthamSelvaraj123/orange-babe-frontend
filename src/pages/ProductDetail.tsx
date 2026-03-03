import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, ageGroups } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Truck, ShieldCheck, ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import FeaturedProducts from "@/components/FeaturedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h1 className="text-2xl font-display font-bold mb-2">Product not found</h1>
          <Link to="/products"><Button variant="outline">Back to Products</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ageLabel = ageGroups.find((a) => a.id === product.ageGroup)?.label || product.ageGroup;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="bg-card rounded-xl overflow-hidden shadow-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-5">
            {product.badge && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl font-display font-bold">{product.name}</h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
              <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                {ageLabel}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              <span className="bg-secondary text-secondary-foreground text-sm font-bold px-2 py-0.5 rounded-full">
                {product.discount}% OFF
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Qty selector */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Qty:</span>
              <div className="flex items-center bg-muted rounded-full">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQty(Math.max(1, qty - 1))}>
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-semibold text-sm">{qty}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQty(qty + 1)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1 rounded-full font-semibold gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
              <Link to="/cart" className="flex-1">
                <Button size="lg" variant="outline" className="w-full rounded-full font-semibold" onClick={handleAddToCart}>
                  Buy Now
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-secondary" />
                <span>Free delivery over ₹499</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span>100% safe & certified</span>
              </div>
            </div>
          </div>
        </div>

        <FeaturedProducts
          title="You May Also Like"
          filter={(p) => p.category === product.category && p.id !== product.id}
          limit={4}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
