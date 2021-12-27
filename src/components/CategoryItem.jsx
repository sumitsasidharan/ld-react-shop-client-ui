import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
   flex: 1;
   margin: 3px;
   height: 70vh;
   position: relative;
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   ${mobile({ height: '30vh' })};
`;
const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;
const Title = styled.h1`
   color: white;
   margin-bottom: 20px;
`;
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   color: gray;
   font-weight: 600;
   cursor: pointer;
`;

const CategoryItem = ({ item }) => {
   return (
      <Container>
         <Link to={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
               <Title>{item.title}</Title>
               <Button>SHOP NOW</Button>
            </Info>
         </Link>
      </Container>
   );
};

export default CategoryItem;
