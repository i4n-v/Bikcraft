import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UndelineButton = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  color: var(--p01);
  font: 500 1.5rem/1.5 "Poppins", sans-serif;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: currentColor;
  }

  &:hover {
    color: var(--w);
  }  
`;

export default UndelineButton;
