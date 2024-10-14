// src/components/Features.jsx
import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const Feature = styled.div`
  margin: 20px 0;
`;

const Features = () => (
  <FeaturesContainer>
    <h2>Key Features</h2>
    <Feature>Fast Transactions</Feature>
    <Feature>Low Fees</Feature>
    <Feature>Decentralized Governance</Feature>
  </FeaturesContainer>
);

export default Features;
