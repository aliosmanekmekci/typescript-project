import { Box, Card, Grid, Inset, Strong, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Grid columns="6" mt="9">
      {products.map((product) => (
        <Box key={product.id} height="100%">
          <Card size="1" style={{ maxWidth: 200 }}>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: 140,
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>{product.title}</Strong>
            </Text>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default Cards;
