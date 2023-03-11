import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background:pink;
  height:50px;
  align-items:center;
`;

const Navigation = () => {
  return (
    <NavWrap>
      <Link to={"/"}
        style={{
          margin: "0px 20px",
          textDecoration: 'none',
          listStyle: "none",
        }}>
        Recettes
      </Link>
      <Link to={"/favorites"}>
        Recettes favorites
      </Link>
    </NavWrap>
  );
};
export default Navigation;