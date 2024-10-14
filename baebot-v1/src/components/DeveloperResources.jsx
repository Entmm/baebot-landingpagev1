// src/components/DeveloperResources.jsx
import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const DeveloperResources = () => (
  <ResourcesContainer>
    <h2>Developer Resources</h2>
    <p>Documentation, APIs, and tools for developers.</p>
  </ResourcesContainer>
);

export default DeveloperResources;
