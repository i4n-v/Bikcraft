import React from "react";
import styled from "styled-components";
import { IImageElement } from "../../../types/interfaces/html";

type IBikeCardProps = {
  image: IImageElement;
  title: string;
  price: string | number;
};

export type { IBikeCardProps };

const CardContainer = styled.div`
  > span {
    color: var(--c08);
  }

  > h3 {
    display: flex;
    align-items: center;
  }

  > h3:before {
    content: "";
    background: var(--p01);
    height: 8px;
    width: 12px;
    display: inline-block;
    margin-right: 8px;
    transition: 0.2s;
  }
  
  &:hover h3:before {
    width: 24px;
  }
  
  > span {
    padding-left: 20px;
  }

  @media (max-width: 800px) {

  }
`;

const index = ({ image, title, price }: IBikeCardProps) => {
  return (
    <CardContainer>
      <img src={image.src} alt={image.alt} />
      <h3 className="poppins-xl">{title}</h3>
      <span className="roboto-m">R$ {price}</span>
    </CardContainer>
  );
};

export default index;
