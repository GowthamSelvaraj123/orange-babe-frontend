import { Sparkles, Truck, ShieldCheck, RotateCcw } from "lucide-react";

const features = [
  { icon: Sparkles, label: "Best Prices", desc: "Guaranteed lowest" },
  { icon: Truck, label: "Free Delivery", desc: "On orders ₹499+" },
  { icon: ShieldCheck, label: "100% Safe", desc: "Certified products" },
  { icon: RotateCcw, label: "Easy Returns", desc: "15-day returns" },
];

const DealsStrip = () => {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3 justify-center">
              <div className="bg-primary/10 p-2.5 rounded-full">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsStrip;
