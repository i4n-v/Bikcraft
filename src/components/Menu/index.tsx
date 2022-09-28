import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as BikcraftLogo } from "../../assets/svg/bikcraft-logo.svg";

const Header = styled.header`
  background-color: var(--c12);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  
  @media (max-width: 800px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Link = styled(NavLink)`
  ${(props) =>
    typeof props.children === "string" &&
    `
    display: inline-block;
    color: var(--w);
    border-radius: 4px;
    padding: 16px 0px;
    position: relative;

    &:after {
      content: "";
      display: block;
      background: var(--w);
      height: 2px;
      width: 0px;
      margin: 4px 0;
      transition: 0.3s;
      position: absolute;
    }

    &:hover&:after {
      width: 100%;
    }

    @media (max-width: 800px) {
      background: var(--c11);
      padding: 12px 16px;

      &:hover {
        background: var(--c10);
      }

      &:after {
        display: none;
      }
    }

    @media (max-width: 600px) {
      padding: 8px 12px;
      font-size: 14px;
    }
  `}
`;

const Menu = () => {
  return (
    <Header>
      <Container className="container">
        <Link to="/">
          <BikcraftLogo />
        </Link>
        <nav aria-label="primária">
          <List className="poppins-m">
            <li>
              <Link to="/bicicletas">Bicicletas</Link>
            </li>
            <li>
              <Link to="/seguros">Seguro</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </List>
        </nav>
      </Container>
    </Header>
  );
};

export default Menu;
