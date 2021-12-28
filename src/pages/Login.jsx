import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
// import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(
         rgba(255, 255, 255, 0.4),
         rgba(255, 255, 255, 0.4)
      ),
      url('https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')
         center/cover;
`;

const Wrapper = styled.div`
   width: 25%;
   min-width: 350px;
   padding: 20px;
   background-color: #fff;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;

const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0;
   padding: 10px;
`;

const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: #fff;
   cursor: pointer;
   margin: 10px 0;

   &:disabled {
      color: green;
      cursor: not-allowed;
   }
`;

const Link = styled.a`
   margin: 5px 0;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`;

const Error = styled.span`
   color: red;
`;

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const { isFetching, error } = useSelector((state) => state.user);

   const handleClick = (e) => {
      e.preventDefault();

      login(dispatch, { username, password });
   };

   return (
      <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
               <Input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
               />
               <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
               />

               <Button onClick={handleClick} disabled={isFetching}>
                  LOGIN
               </Button>

               {error && <Error>Something Went Wrong!!</Error>}

               <Link>FORGOT PASSWORD?</Link>
               <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
         </Wrapper>
      </Container>
   );
};

export default Login;
