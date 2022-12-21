import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function submit(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    e.preventDefault();
    if (values.email.trim().length < 4) {
      generateError("invalid email");
    } else if (values.password.trim().length < 4) {
      generateError("Invalid password");
    } else if (!regex.test(values.email)) {
      generateError("This is not a valid email format!");
    } else {
      makeRequest
        .post("auth/Login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          if (res.data.err) {
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
          } else {
            console.log(res.data);
            navigate("/dashboard");
          }
        });
    }
  }


  function handle(e) {
    const newdata = { ...values };
    newdata[e.target.name] = e.target.value;
    setValues(newdata);
  }

  return (
    <Container>
      <Wrapper>
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
        <Title> Login</Title>
        <Form onSubmit={(e) => submit(e)}>
          <label>Email</label>
          <Input
            placeholder="Enter email"
            type="email"
            name="email"
            onChange={(e) => handle(e)}
          />
          <label>Password</label>
          <Input
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={(e) => handle(e)}
          />
          {/* <label>Confirm password</label>
          <Input placeholder=" enter password" /> */}

          <Button type="submit">SIGN IN</Button>

          <Link to={"/register"}>
            <LinkS>Don't have an account? Signup</LinkS>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
