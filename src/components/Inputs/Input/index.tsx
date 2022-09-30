import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export type { IInputProps };

const InputContainer = styled.div`
  label {
    display: block;
    font: 600 1rem/1.5 Poppins, sans-serif;
    margin-bottom: 4px;
  }

  input {
    font: 400 1rem/1.5 Roboto, sans-serif;
    background: var(--c01);
    border: 1px solid var(--c02);
    padding: 12px;
    border-radius: 4px;
    width: 100%;
  }

  input:focus {
    outline: none;
    border-color: var(--p01);
    background: var(--w);
    box-shadow: 0px 0px 0px 2px #fea;
  }
`;

const Input = ({ name, label, ...props }: IInputProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
    </InputContainer>
  );
};

export default Input;
