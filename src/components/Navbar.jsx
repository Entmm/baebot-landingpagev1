// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
      color: #3b82f6;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Optimism</Logo>
      <NavLinks>
        <NavLink><a href="#features">Features</a></NavLink>
        <NavLink><a href="#community">Community</a></NavLink>
        <NavLink><a href="#developers">Developers</a></NavLink>
      </NavLinks>
      <Button>Launch App</Button>
    </Nav>
  );
};

export default Navbar;
