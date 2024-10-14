// src/components/Community.jsx
import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const Community = () => (
  <CommunityContainer>
    <h2>Join Our Community</h2>
    <p>Be part of the revolution in scaling Ethereum.</p>
  </CommunityContainer>
);

export default Community;
