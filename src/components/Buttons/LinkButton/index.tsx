import { NavLink } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../../assets/svg/icons/arrow.svg";

const LinkButton = styled(NavLink)`
  display: inline-block;
  padding: 16px 32px;
  max-width: max-content;
  background: var(--gdr01);
  border-radius: 5px;
  box-shadow: var(--shadow01);
  text-transform: uppercase;
  color: var(--p05);
  font: 600 1.125rem/1.35 "Poppins", sans-serif;

  &:hover {
    background: var(--gdr02); 
  }

  &.arrow {
    display: flex;
    align-items: center;
  }

  &.arrow:after {
    content: "";
    display: inline-block;
    width: 18px;
    height: 10px;
    margin-left: 12px;
    background: url(${arrow});
    transition: transform .2s;
  }

  &.arrow:hover&:after {
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 1rem;
  }
`;

export default LinkButton;
