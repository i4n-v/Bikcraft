import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export type { ITextareaProps };

const InputContainer = styled.div`
    label {
    display: block;
    font: 400 1rem/1.5 Poppins, sans-serif;
    margin-bottom: 4px;
  }

  textarea {
    font: 400 1rem/1.5 Roboto, sans-serif;
    background: var(--c01);
    border: 1px solid var(--c02);
    padding: 12px;
    border-radius: 4px;
    width: 100%;
  }

  textarea:focus {
    outline: none;
    border-color: var(--p01);
    background: var(--w);
    box-shadow: 0px 0px 0px 2px #fea;
  }
`;

const Textarea = ({ name, label, rows = 5, ...props }: ITextareaProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} rows={rows} {...props} />
    </InputContainer>
  );
};

export default Textarea;
