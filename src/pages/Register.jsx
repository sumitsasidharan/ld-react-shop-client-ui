import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(
         rgba(255, 255, 255, 0.5),
         rgba(255, 255, 255, 0.5)
      ),
      url('https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
         center/cover;
`;

const Wrapper = styled.div`
   width: 50%;
   padding: 20px;
   background-color: #fff;
`;

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;

const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0 0;
   padding: 10px;
`;

const Agreement = styled.span`
   font-size: 12px;
   margin: 20px 0;
`;

const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: #fff;
   cursor: pointer;
`;

const Register = () => {
   return (
      <Container>
         <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
               <Input placeholder="First Name" />
               <Input placeholder="Last Name" />
               <Input placeholder="Username" />
               <Input placeholder="Email" />
               <Input placeholder="Password" />
               <Input placeholder="Confirm Password" />

               <Agreement>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the{' '}
                  <strong>PRIVACY POLICY</strong>
               </Agreement>

               <Button>CREATE</Button>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Register;
