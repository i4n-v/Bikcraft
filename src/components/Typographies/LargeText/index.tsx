import styled from "styled-components";

const LargeText = styled.h1`
  font-size: 64px;
  line-height: 1.125;
  font-family: Poppins;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 48px;
  }

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export default LargeText;
