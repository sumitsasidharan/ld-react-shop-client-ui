import React from 'react';
import {
   Facebook,
   Instagram,
   Twitter,
   GitHub,
   Room,
   Phone,
   Email,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
   margin: 20px 0;
`;

const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: #fff;

   background-color: #${(props) => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1;
   padding: 20px;
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`;

const Payment = styled.img`
   width: 60%;
`;

const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>LOGO.</Logo>
            <Desc>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
               sunt iusto amet fugiat blanditiis nostrum rerum, iste unde
               sapiente enim doloremque perferendis odio reprehenderit aperiam
               reiciendis magni optio deserunt. Alias!
            </Desc>
            <SocialContainer>
               <SocialIcon color="3b5999">
                  <Facebook />
               </SocialIcon>
               <SocialIcon color="e4405f">
                  <Twitter />
               </SocialIcon>
               <SocialIcon color="55acee">
                  <GitHub />
               </SocialIcon>
               <SocialIcon color="e60023">
                  <Instagram />
               </SocialIcon>
            </SocialContainer>
         </Left>

         <Center>
            <Title>Useful Links</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Men's Fashion</ListItem>
               <ListItem>Women's Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
         </Center>

         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{ marginRight: '10px' }} /> 14 Dixie Path, South
               Dakota 98562
            </ContactItem>
            <ContactItem>
               <Phone style={{ marginRight: '10px' }} /> +1 256 36 785
            </ContactItem>
            <ContactItem>
               <Email style={{ marginRight: '10px' }} /> s.sumit196@gmail.com
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
         </Right>
      </Container>
   );
};

export default Footer;
