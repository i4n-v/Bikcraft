import React from "react";
import styled from "styled-components";
import arrowOpen from "../../assets/svg/icons/arrow-open.svg";

type IAccordionItems = {
  title: string;
  description: string;
};

type IAccordionProps = {
  items: IAccordionItems[];
};

export type { IAccordionProps, IAccordionItems };

const AccordionContainer = styled.dl`
  > div {
   padding: 20px;
   border-radius: 4px;
  }

  > div > dd {
    color: var(--c09);
    padding: 16px 0px 0px 20px;
    max-width: 80ch;
  }

  > div:nth-child(odd) {
    background: var(--c01);
  }

  > div > dt {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  > div > dt:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 8px;
    background: var(--p01);
  }

  > div > dt:after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 6px;
    background: url(${arrowOpen});
  }
`;

const Accordion = ({ items }: IAccordionProps) => {
  return (
    <AccordionContainer>
      {items.map(({ title, description }) => (
        <div key={title}>
          <dt className="poppins-m-b">{title}</dt>
          <dd className="roboto-s">{description}</dd>
        </div>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
