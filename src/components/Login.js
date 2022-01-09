import React, { useState } from "react";
import FormInput from "./FormInput";
import styled from "styled-components";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [_name, setName] = useState("");
  const [_image, setImage] = useState("");
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, _email, _password).then((userCredential) => {
      dispatch(login({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: _name,
        image: _image,
      }))
    }).catch((error) => alert(error))
  }

  
  const register = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, _email, _password).then((userCredential) => {
        updateProfile(userCredential.user, {
            displayName: _name,
            photoURL: _image,
          }).then(() => {
              dispatch(login({
                  uid: userCredential.user.uid,
                  email: userCredential.user.email,
                  name: _name,
                  image: _image,
                }))
              })
            }).catch((error) => alert(error))
            
            };
            
  return (
    <div className="parent">
      <Container>
        <Image
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          alt=""
        />
        <p className="loginTag">Make the most of your professional life</p>
        <form className="loginForm">
          <FormInput
            value={_name}
            onChange={(e) => setName(e.target.value)}
            title="Full Name"
            type="text"
          />
          <FormInput
            value={_image}
            onChange={(e) => setImage(e.target.value)}
            title="Profile Photo URL"
            type=""
          />
          <FormInput
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
            title="Email or phone number"
            type="email"
          />
          <FormInput
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
            title="Password (6 or more characters)"
            type="password"
          />

          <p className="terms">
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>

          <SignInBtn>
            <button className="SignInBtn join" onClick={register}>
              Agree & Join
            </button>
            <button className="SignInBtn login" onClick={login}>Already Signin? Login</button>
          </SignInBtn>
        </form>
      </Container>
      <img
        src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
        alt=""
        className="banner"
      />
    </div>
  );
};

export default Login;

const Container = styled.div`
  background-color: whitesmoke;
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;
`;
const Image = styled.img`
  width: 170px;
`;
const SignInBtn = styled.div`
  display: flex;
  flex-direction: column;
`;
