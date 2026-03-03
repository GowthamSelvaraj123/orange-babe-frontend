import Link from "next/link";
import { ageGroups } from "@/data/products";

const colorClasses: Record<string, string> = {
  "baby-pink": "bg-baby-pink",
  "baby-blue": "bg-baby-blue",
  "baby-green": "bg-baby-green",
  "baby-purple": "bg-baby-purple",
  "baby-orange": "bg-baby-orange",
};

const AgeCategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold mb-2">Shop by Age</h2>
        <p className="text-muted-foreground">Find age-appropriate products tailored for your child</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {ageGroups.map((group) => (
          <Link key={group.id}
            href={`/products?age=${group.id}`}
            className="group flex flex-col items-center gap-3"
          >
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${colorClasses[group.color]} flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 shadow-card`}
            >
              {group.emoji}
            </div>
            <span className="text-sm font-semibold text-center">{group.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AgeCategorySection;
