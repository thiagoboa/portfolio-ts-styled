import React, { Component } from "react";
import styled from "styled-components";
import { Theme } from "../assets/style/Theme";

const StyledHeader = styled.header`
  background-color: ${Theme.header.bg};
  color: ${Theme.header.color};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavLink = styled.a`
  color: ${Theme.header.color};
`;

const Logo = styled.img`
  width: 50px;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <strong>Thiago Boa</strong>
        <NavLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </NavLink>
      </StyledHeader>
    );
  }
}

export default Header;
