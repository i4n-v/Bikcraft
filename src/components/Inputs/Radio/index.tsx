import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  radios: {
    label: string;
    before?: string;
    value: string | number;
  }[];
}

export type { IRadioProps };

const RadioContainer = styled.div`
  label {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    font: 400 1rem/1.5 Poppins, sans-serif;
    color: var(--c04);
    background: var(--c10);
    padding: 12px 16px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
  }

  label:hover {
    background: var(--c09);
  }

  input:focus + label {
    background: var(--c09);
    box-shadow: 0px 0px 0px 2px var(--p01);
    border-color: var(--c12);
  }

  label > span {
    display: none;
  }

  label:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid var(--c06);
    border-radius: 50%;
    margin-right: 8px;
    box-sizing: border-box;
  }
  
  input:checked + label > span {
    display: inline;
  }
  
  input:checked + label:before {
    border-color: var(--c07);
    box-shadow: inset 0px 0px 0px 3px var(--w), inset 0px 0px 0px 6px var(--c07);
  }

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  input:checked + label {
    background-color: var(--w);
    color: var(--c12);
  }
`;

const Radio = ({ name, radios, ...props }: IRadioProps) => {
  return (
    <>
      {radios.map(({ label, before, value }, index) => (
        <RadioContainer key={value}>
          <input type="radio" id={`${name}-${index}`} name={name} value={value} {...props} />
          <label htmlFor={`${name}-${index}`}>
            {label} {before && <span>{before}</span>}
          </label>
        </RadioContainer>
      ))}
    </>
  );
};

export default Radio;
