import React, { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { makeRequest } from "../axios";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white; ;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;
const LinkS = styled.a`
  margin: 15px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const  Register= ()=> {
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const generateError = (error) =>
toast.error(error, {
  position: "top-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });


  function submit(e){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    e.preventDefault();
    if (values.email.trim().length < 4) {
      generateError(" write currect email");
    }else  if (values.username.trim().length < 4) {
      generateError("name is short");
    } else if (values.password.trim().length < 4) {
      generateError("Invalid password");
    } else if (!regex.test(values.email)) {
      generateError("This is not a valid email format!");
    } else {
      makeRequest.post("auth/register",{
      name:values.username,
      email:values.email,
      password:values.password
    })
    .then(res=>{
      if(res.data.err){
        console.log(res.data);
        toast.error(res.data.err, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      
       
      }else{
        console.log(res.data);
        navigate('/')
      }
    })
  }
  }
  
  function handle(e){
    const newdata={...values}
    newdata[e.target.name]=e.target.value
    setValues(newdata)
    console.log(newdata);
  }

 

  
    return (
      <Container>
        <Wrapper>
          <Title> Registration</Title>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
          <Form  onSubmit={(e)=>submit(e)}>
            <label>Full name</label>
            <Input
              placeholder="Enter name"
              type="text"
              name="username"

              onChange={(e) => handle((e))}
            />
            <label >Email</label>
            <Input
              placeholder="Enter email"
              type="email"
              name="email"
              onChange={(e) => handle((e))}
            />
            <label>Password</label>
            <Input
              placeholder="Enter password"
              type="password"
              name="password"
              onChange={(e) => handle((e))}
            />
            {/* <label>Confirm password</label>
          <Input placeholder=" enter password" /> */}

            <Button type="submit">SIGN UP</Button>

            <Link to={'/'}><LinkS>Already have an account ? LOGIN</LinkS></Link>
          </Form>
        </Wrapper>
      </Container>
    );
  
}

export default Register;
