import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   height: 30px;
   background-color: teal;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   font-weight: 500;
`;

const Announcement = () => {
   return (
      <Container>
         <p>Super Deal! Free Shipping on Orders above $50.</p>
      </Container>
   );
};

export default Announcement;
