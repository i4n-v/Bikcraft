import styled from "styled-components";

const MediumText = styled.p`
  font-size: 24px;
  line-height: 1.5;
  font-family: Roboto;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export default MediumText;
