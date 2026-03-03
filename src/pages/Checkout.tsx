import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowLeft } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center animate-slide-in">
          <CheckCircle className="h-20 w-20 mx-auto text-secondary mb-6" />
          <h1 className="text-3xl font-display font-bold mb-2">Order Placed! 🎉</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Thank you for shopping with TinyTreasures. Your order will be delivered soon!
          </p>
          <Link to="/">
            <Button className="rounded-full px-8">Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold mb-2">Nothing to checkout</h1>
          <Link to="/products"><Button variant="outline" className="rounded-full">Browse Products</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const deliveryFee = totalPrice >= 499 ? 0 : 49;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </Link>
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-6">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
              <h2 className="font-display font-bold text-lg">Delivery Address</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fname">First Name</Label>
                  <Input id="fname" placeholder="John" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input id="lname" placeholder="Doe" className="rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" className="rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="House no., Street, Area" className="rounded-lg" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Mumbai" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Maharashtra" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pin">Pincode</Label>
                  <Input id="pin" placeholder="400001" className="rounded-lg" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
              <h2 className="font-display font-bold text-lg">Payment</h2>
              <p className="text-sm text-muted-foreground">Cash on Delivery (COD) selected</p>
              <div className="bg-muted p-4 rounded-lg text-sm">
                💡 Online payment options coming soon! For now, pay when your order arrives.
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-card rounded-xl p-6 shadow-card h-fit sticky top-32 space-y-4">
            <h2 className="font-display text-lg font-bold">Order Summary</h2>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 text-sm">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="line-clamp-1 font-medium">{product.name}</p>
                    <p className="text-muted-foreground">₹{product.price} × {quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({totalItems})</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
              </div>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice + deliveryFee}</span>
            </div>
            <Button
              className="w-full rounded-full font-semibold mt-2"
              size="lg"
              onClick={() => {
                clearCart();
                setPlaced(true);
              }}
            >
              Place Order
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
