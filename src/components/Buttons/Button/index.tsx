import styled from "styled-components";

const LinkButton = styled.button`
  display: inline-block;
  padding: 16px 32px;
  max-width: max-content;
  background: var(--gdr01);
  border-radius: 5px;
  box-shadow: var(--shadow01);
  border: none;
  text-transform: uppercase;
  color: var(--p05);
  cursor: pointer;
  font: 600 1.125rem/1.35 "Poppins", sans-serif;

  &:hover {
    background: var(--gdr02); 
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 1rem;
  }
`;

export default LinkButton;
