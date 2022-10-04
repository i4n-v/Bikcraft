import React from "react";
import styled from "styled-components";
import topRight from "../../assets/svg/decorations/top-right.svg";

type PageTitleProps = {
  title?: string;
  subtitle?: string;
};

export type { PageTitleProps };

const TitleContainer = styled.div`
  background: var(--c11);
  padding: 60px 20px;

  > div {
    background: url(${topRight}) no-repeat top right 20px;
  }

  > div > p {
    color: var(--c05);
    margin-bottom: 4px;
  }

  > div > h1 {
    color: var(--w);
  }
  
  @media (max-width: 800px) {
    padding: 40px 20px;

    > div > p {
      font-size: 1rem;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`;

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <TitleContainer>
      <div className="container">
        <p className="roboto-l-b">{subtitle}</p>
        <h1 className="poppins-xxl">
          {title}
          <span className="dot">.</span>
        </h1>
      </div>
    </TitleContainer>
  );
};

export default PageTitle;
