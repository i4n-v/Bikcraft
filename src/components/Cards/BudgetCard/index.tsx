import React from "react";
import styled from "styled-components";
import { ReactComponent as Eletrical } from "../../../assets/svg/icons/eletrical.svg";
import { ReactComponent as Carbono } from "../../../assets/svg/icons/carbono.svg";
import { ReactComponent as Speed } from "../../../assets/svg/icons/speed.svg";
import { ReactComponent as Searcher } from "../../../assets/svg/icons/searcher.svg";
import { IImageElement } from "../../../types/interfaces/html";

type IBudgetCardProps = {
  image: IImageElement;
};

export type { IBudgetCardProps };

const Details = styled.div`
  background: var(--w);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 4px;
  align-items: center;

  > ul {
    color: var(--c08);
  }

  > ul > li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > ul > li > svg {
    scale: 60%;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;

    > img {
      grid-row: 1;
    }
  }
`;

const index = ({ image }: IBudgetCardProps) => {
  return (
    <Details>
      <ul className="poppins-xs">
        <li>
          <Eletrical /> Motor Elétrico
        </li>
        <li>
          <Carbono /> Fibra de Carbono
        </li>
        <li>
          <Speed /> 40 km/h
        </li>
        <li>
          <Searcher /> Rastreador
        </li>
      </ul>
      <img src={image.src} alt={image.alt} />
    </Details>
  );
};

export default index;
