import { useEffect, useState } from "react";
import { Link } from "wouter";

interface ProductData {
  id: string;
  title: string;
  description: string;
}

export default function CartDetails() {
  const [products, setProducts] = useState<ProductData[]>([]);

  // Function to fetch product list
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: ProductData[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <a>{product.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
