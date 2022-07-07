import React from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { Header, Layout, ProductCard } from "../../components";
import { products } from "../../fakeData/products/products";
import { styles, theme } from "./styles";

export const ListProducts = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <Layout>
          <Box sx={styles.boxWrapper}>
            <Box>
              <Typography sx={styles.typoTitle} variant="h1">
                Produtos
              </Typography>
            </Box>

            <Button startIcon={<AddCircle />} variant="contained">
              Adicionar Produto
            </Button>
          </Box>

          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </Layout>
      </ThemeProvider>
    </>
  );
};