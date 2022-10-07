import React, { useState } from "react";
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
    display: none;
  }

  > div:nth-child(odd) {
    background: var(--c01);
  }

  > div > dt > button {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }

  > div > dt > button:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 8px;
    background: var(--p01);
  }

  > div > dt > button:after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 6px;
    background: url(${arrowOpen});
    transition: transform 0.3s;
  }

  .active button:after {
    transform: rotate(-180deg);
  }

  .active dd {
    display: block;
  }
`;

const Accordion = ({ items }: IAccordionProps) => {
  const [actives, setActives] = useState<number[]>([0]);

  const handleClick = (index: number) => {
    if (actives.includes(index)) {
      const filteredElements = actives.filter((active) => active !== index);
      setActives(filteredElements);
    } else {
      setActives((actives) => [...actives, index]);
    }
  };

  return (
    <AccordionContainer>
      {items.map(({ title, description }, index) => (
        <div key={title} className={actives.some((active) => active === index) ? "active" : ""}>
          <dt>
            <button className="poppins-m-b" onClick={() => handleClick(index)}>
              {title}
            </button>
          </dt>
          <dd className="roboto-s">{description}</dd>
        </div>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
