import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BikcraftLogo } from "../../assets/svg/bikcraft-logo.svg";
import { ReactComponent as Instagram } from "../../assets/svg/social/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/social/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/svg/social/youtube.svg";

const StyledFooter = styled.footer`
  background: var(--c12);

  > div {
    display: grid;
    grid-template-columns: 3fr 5fr 4fr;
    gap: 40px;
    padding: 60px 20px;
  }

  > div h3 {
    color: var(--w);
    margin-bottom: 32px;
  }

  > div ul {
    color: var(--c05);    
    display: flex;
    flex-direction: column;
    gap: 16px;
  }  

  > div > p {
    color: var(--c06);
    grid-column: 1/-1;
    margin-top: 40px;
  }

  a:hover {
    color: var(--w);
  }

  @media (max-width: 800px) {
    > div {
      grid-template-columns: 1fr 1fr;
    }

    > div > a {
      display: none;
    }
  }

  @media (max-width: 600px) {
    > div {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    > div > p {
      margin-top: 0px;
    }
  }
`;

const Contact = styled.ul`
  margin-bottom: 32px;

  > li:nth-child(even):after {
    content: "";
    display: block;
    max-width: 360px;
    height: 2px;
    background: var(--c11);
    margin-top: 16px;
  }
`;

const Social = styled.ul`
  display: flex;
  flex-direction: row !important;
  gap: 32px !important;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link to="/">
          <BikcraftLogo />
        </Link>
        <div>
          <h3 className="roboto-l-b">Contato</h3>
          <Contact className="roboto-m">
            <li>
              <a href="tel:+5581999999999">+55 81 99999-9999</a>
            </li>
            <li>
              <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
            </li>
            <li>Rua Ali Perto, 42 - Bota Fogo</li>
            <li>Rio de Janeiro - RJ</li>
          </Contact>
          <Social>
            <li>
              <Link to="#">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Youtube />
              </Link>
            </li>
          </Social>
        </div>
        <div>
          <h3 className="roboto-l-b">informações</h3>
          <ul className="poppins-m">
            <li>
              <Link to="/bicicletas">Bicicletas</Link>
            </li>
            <li>
              <Link to="/seguros">Seguros</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/termos">Termos e Condições</Link>
            </li>
          </ul>
        </div>
        <p className="roboto-m">Bikcraft &copy; alguns direitos reservados.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
