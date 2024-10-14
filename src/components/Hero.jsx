// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/path/to/background-image.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3b82f6; /* Customize the color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => (
  <HeroContainer>
    <Title>Optimistic Scaling for Ethereum</Title>
    <Subtitle>Faster, cheaper transactions for everyone.</Subtitle>
    <Button>Get Started</Button>
  </HeroContainer>
);

export default Hero;
