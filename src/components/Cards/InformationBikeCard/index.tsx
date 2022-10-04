import React from "react";
import styled from "styled-components";
import type { IImageElement } from "../../../types/interfaces/html";
import { LinkButton } from "../../Buttons";
import topRight from "../../../assets/svg/decorations/top-right.svg";

type IFeature = {
  icon: JSX.Element;
  name: string;
};

type IInformationBikeCard = {
  image: IImageElement;
  link: string;
  name: string;
  description: string;
  price: string | number;
  features: IFeature[];
  variant?: string;
};

export type { IInformationBikeCard, IFeature };

const CardContainer = styled.div`
  &[data-variant="primary"] {
    background: var(--w);
  }

  &[data-variant="secondary"] {
    background: linear-gradient(to right, var(--w) 30%, var(--c12) 0%);
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 60px 20px;
    background: url(${topRight}) no-repeat top 40px right 20px;
  }

  @media (max-width: 800px) {
    &[data-variant="secondary"] {
      background: var(--c12) !important;
    }

    > div {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 40px 20px;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;

  > img {
    grid-area: 1/1;
  }

  > span {
    grid-area: 1/1;
    place-self: start end;
    margin-top: 20px;
    color: var(--w);
    background: var(--c12);
    padding: 8px 16px 8px 8px;
    display: inline-block;
    border-radius: 4px 0px 0px 4px ;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: start;

  &[data-variant="primary"] > h2 {
    color: var(--c12);
  }

  &[data-variant="secondary"] > h2 {
    color: var(--w);
  }

  &[data-variant="primary"] > p, &[data-variant="primary"] > ul {
    color: var(--c08);
  }

  &[data-variant="secondary"] > p, &[data-variant="secondary"] > ul {
    color: var(--c05);
  }

  h2, p {
    grid-column: 1/-1;
  }

  h2 {
    margin-bottom: 20px;    
  }

  h2:before {
    content: "";
    display: block;
    width: 12px;
    height: 8px;
    background: var(--p01);
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 32px;
  }

  > a {
    place-self: end;
  }

  ul {
    display: grid;
    gap: 16px;
  }

  ul > li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > ul > li > svg {
    scale: 75%;    
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    > ul {
      margin-bottom: 32px;
      grid-template-columns: 1fr 1fr;
      font-size: 1rem;
    }

    > a {
      place-self: start;
    }
  }
`;

const InformationBikeCard = ({
  image,
  link,
  name,
  description,
  price,
  features,
  variant = "primary",
}: IInformationBikeCard) => {
  return (
    <CardContainer data-variant={variant}>
      <div className="container">
        <ImageContainer>
          <img src={image.src} alt={image.alt} />
          <span className="roboto-m">R$ {price}</span>
        </ImageContainer>
        <ContentContainer data-variant={variant}>
          <h2 className="poppins-xl">{name}</h2>
          <p className="roboto-s">{description}</p>
          <ul className="poppins-m">
            {features.map(({ icon, name }, index) => (
              <li key={`${name}-${index}`}>
                {icon} {name}
              </li>
            ))}
          </ul>
          <LinkButton to={link} className="arrow">
            mais sobre
          </LinkButton>
        </ContentContainer>
      </div>
    </CardContainer>
  );
};

export default InformationBikeCard;
