import { Box, Container, Table } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams } from "wouter";

interface ProductData {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function CartDetails() {
  const [product, setProduct] = useState<ProductData | null>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: ProductData = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  return (
    <div>
      {product && (
        <div>
          <Box
            style={{
              background: "var(--gray-a2)",
              borderRadius: "var(--radius-3)",
            }}
          >
            <Container size="1">
              <Box py="9" m="-1">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>
                        {product.title}
                      </Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>
                        {product.description}
                      </Table.RowHeaderCell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Box>
            </Container>
          </Box>
        </div>
      )}
    </div>
  );
}
