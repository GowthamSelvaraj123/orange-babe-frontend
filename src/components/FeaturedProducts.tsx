import ProductCard from "./ProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter?: (p: typeof products[0]) => boolean;
  limit?: number;
}

const FeaturedProducts = ({
  title,
  subtitle,
  filter,
  limit = 4,
}: FeaturedProductsProps) => {
  const filtered = filter ? products.filter(filter) : products;
  const display = filtered.slice(0, limit);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {display.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
