import React from "react";
import styled from "styled-components";
import { LinkButton } from "../../Buttons";
import list from "../../../assets/svg/icons/list.svg";

type IInsuranceCardProps = {
  title: string;
  price: string | number;
  color: string;
  items: string[];
};

export type { IInsuranceCardProps };

const CardContainer = styled.div`
  background: var(--c12);
  padding: 32px 32px 32px 60px;
  display: grid;
  grid-template-columns: 1fr auto;
  border-radius: 4px;

  > h3 {
    margin-bottom: 40px;
  }

  
  > span, > ul {
    color: var(--w);
  }

  > span {
    grid-column: 2;
    text-align: right;
  }

  > span > span {
    display: block;
    color: var(--c06);
  }

  > ul {
    grid-column: 1/-1;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  > ul > li {
    display: flex;
    align-items: center;
    position: relative;
  }

  > ul > li:before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 9px;
    background-image: url(${list});
    position: absolute;
    left: -21px
  }

  > a {
    grid-column: 1/-1;
  }  
`;

const SecondaryButton = styled(LinkButton)`
  background: var(--c10);
  color: var(--c02);
  
  &:hover {
    background: var(--c09);
  }
`;

const index = ({ title, price, color, items }: IInsuranceCardProps) => {
  return (
    <CardContainer>
      <h3 className="poppins-xl" style={{ color }}>
        {title}
      </h3>
      <span className="poppins-xl">
        R$ {price} <span className="poppins-xs">mensal</span>
      </span>
      <ul className="roboto-m">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
      {title === "PRATA" ? (
        <SecondaryButton to="/orcamentos">inscreva-se</SecondaryButton>
      ) : (
        <LinkButton to="/orcamentos">inscreva-se</LinkButton>
      )}
    </CardContainer>
  );
};

export default index;
