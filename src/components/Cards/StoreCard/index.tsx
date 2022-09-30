import React from "react";
import styled from "styled-components";
import { IImageElement } from "../../../types/interfaces/html";
import { ReactComponent as Horario } from "../../../assets/svg/icons/horario.svg";

type IStoreCardProps = {
  title: string;
  hour: string;
  image: IImageElement;
  items: string[][];
};

const StoreCardContainer = styled.div`
  border-radius: 4px;
  background: var(--w);

  img {
    border-radius: 4px 4px 0px 0px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    padding: 32px;
  }

  > div > h3 {
    grid-column: 1/-1;
  }
  
  > div > p {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > div > div { 
    display: grid;
    gap: 8px;
    color: var(--c08);
    border-left: 2px solid var(--c02);
    padding-left: 12px;
  }

  @media (max-width: 800px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

const StoreCard = ({ title, hour, image, items }: IStoreCardProps) => {
  return (
    <StoreCardContainer className="shadow01">
      <img src={image.src} alt={image.alt} />
      <div>
        <h3 className="poppins-xl">{title}</h3>
        {items.map((descriptions, index) => (
          <div key={`${descriptions[0]}-${index}`} className="roboto-s">
            {descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </div>
        ))}
        <p className="poppins-s">
          <Horario /> {hour}
        </p>
      </div>
    </StoreCardContainer>
  );
};

export default StoreCard;
