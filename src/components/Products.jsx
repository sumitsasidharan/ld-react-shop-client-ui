import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const res = await axios.get(
               cat
                  ? `http://localhost:5000/api/products?category=${cat}`
                  : 'http://localhost:5000/api/products'
            );
            setProducts(res.data.products);
         } catch (error) {
            console.log(error.message);
         }
      };

      getProducts();
   }, [cat]);

   useEffect(() => {
      cat &&
         setFilteredProducts(
            products.filter((item) =>
               Object.entries(filters).every(([key, value]) =>
                  item[key].includes(value)
               )
            )
         );
   }, [cat, filters, products]);

   useEffect(() => {
      if (sort === 'newest') {
         setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
         );
      } else if (sort === 'asc') {
         setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
         );
      } else {
         setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
         );
      }
   }, [sort]);

   return (
      <Container>
         {cat
            ? filteredProducts.map((item) => (
                 <ProductItem item={item} key={item.id} />
              ))
            : products
                 .slice(0, 8)
                 .map((item) => <ProductItem item={item} key={item.id} />)}
      </Container>
   );
};

export default Products;
