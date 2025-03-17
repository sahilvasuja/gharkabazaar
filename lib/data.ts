export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'clothing' | 'jewelry';
  collection: 'men' | 'women' | 'kids';
  colors: string[];
  sizes?: string[]; // Optional for jewelry
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // Men's Collection
  {
    id: '1',
    name: 'Classic Fit Cotton Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf',
    description: 'Premium cotton shirt with a comfortable classic fit.',
    category: 'clothing',
    collection: 'men',
    colors: ['white', 'blue', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Slim Fit Chino Pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
    description: 'Versatile chino pants with a modern slim fit.',
    category: 'clothing',
    collection: 'men',
    colors: ['beige', 'navy', 'olive'],
    sizes: ['30', '32', '34', '36', '38']
  },
  {
    id: '3',
    name: 'Stainless Steel Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    description: 'Elegant stainless steel watch with a minimalist design.',
    category: 'jewelry',
    collection: 'men',
    colors: ['silver', 'gold', 'black'],
    isNew: true
  },
  
  // Women's Collection
  {
    id: '4',
    name: 'Floral Print Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    description: 'Beautiful floral print dress perfect for any occasion.',
    category: 'clothing',
    collection: 'women',
    colors: ['blue', 'pink', 'yellow'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true
  },
  {
    id: '5',
    name: 'High-Waisted Jeans',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
    description: 'Stylish high-waisted jeans with a comfortable stretch fit.',
    category: 'clothing',
    collection: 'women',
    colors: ['blue', 'black', 'light-wash'],
    sizes: ['24', '26', '28', '30', '32'],
    isBestseller: true
  },
  {
    id: '6',
    name: 'Pearl Necklace',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    description: 'Elegant pearl necklace with sterling silver clasp.',
    category: 'jewelry',
    collection: 'women',
    colors: ['white', 'cream'],
  },
  
  // Kids' Collection
  {
    id: '7',
    name: 'Dinosaur Print T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7fe5',
    description: 'Fun dinosaur print t-shirt made from soft cotton.',
    category: 'clothing',
    collection: 'kids',
    colors: ['green', 'blue', 'red'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    isNew: true
  },
  {
    id: '8',
    name: 'Denim Overalls',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8',
    description: 'Durable denim overalls perfect for playtime.',
    category: 'clothing',
    collection: 'kids',
    colors: ['blue', 'pink'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    isBestseller: true
  }
]; 