import { useEffect, useState } from "react";
import { useParams } from "wouter";

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}
export default function CategoryPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const { category } = useParams<{ category: string }>();

    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => res.json())
          .then(setProducts);
    }, [category])
  return (
    <div>
          {products.map(product => (
              <div key={product.id}>
                  <h2>{product.title}</h2>
                  <img src={product.image} alt={product.title} />
                  <p>{product.description}</p>
          </div>
      ))}
    </div>
  );
}
