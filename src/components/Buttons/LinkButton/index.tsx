import React from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(#FFBF00, #F2960C);
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: #332200;
  font-size: 18px;
  line-height: 1.33;
  font-weight: bold;

  &:hover {
    background: linear-gradient(#FFB60D, #E59317); 
  }
`;

const LinkButton = ({ to, children }: NavLinkProps) => {
  return <Link to={to}>{children}</Link>;
};

export default LinkButton;
