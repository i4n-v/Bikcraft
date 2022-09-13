import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(NavLink)`
  display: inline-block;
  padding: 16px 32px;
  background: var(--gdr01);
  border-radius: 5px;
  box-shadow: var(--shadow01);
  text-transform: uppercase;
  color: var(--p05);
  font-size: 18px;
  line-height: 1.33;
  font-family: Poppins;
  font-weight: 600;

  &:hover {
    background: var(--gdr02); 
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`;

export default LinkButton;
