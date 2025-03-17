import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22",
      link: "/collections/men"
    },
    {
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
      link: "/collections/women"
    },
    {
      name: "Kid's Fashion",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8",
      link: "/collections/kids"
    },
    {
      name: "Jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      link: "/category/jewelry"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light mb-12 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link key={category.name} href={category.link}>
            <div className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-medium mb-3">{category.name}</h3>
                  <span className="inline-block px-6 py-2 bg-white/90 text-gray-900 text-sm font-medium rounded-full
                    transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 