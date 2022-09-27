import React from "react";
import styled from "styled-components";

type IInformationCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type { IInformationCardProps };

const CardContainer = styled.div`
  > h3 {
    color: var(--w);
    margin-bottom: 8px;
  }

  > p {
    color: var(--c05);
  }

  > svg {
    scale: 75%;
    margin-bottom: 8px;
  }
`;

const index = ({ icon, title, description }: IInformationCardProps) => {
  return (
    <CardContainer>
      {icon}
      <h3 className="poppins-m">{title}</h3>
      <p className="roboto-s">{description}</p>
    </CardContainer>
  );
};

export default index;
