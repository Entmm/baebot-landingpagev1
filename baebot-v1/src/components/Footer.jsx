// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f1f1f1;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Optimism. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
