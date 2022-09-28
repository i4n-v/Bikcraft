import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { PageTitle } from "../../components";

const TermsContainer = styled.div`
  color: var(--c10);
  padding : 80px 20px;
  
  > h2 {
    color: var(--c11);
    font-weight: 600;
    margin-bottom: 20px;
  }

  > p + h2 {
    margin-bottom: 40px;
  } 

  > p {
    max-width: 75ch;
    margin-bottom: 24px;
  }
`;

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Termos e Condições | Bikcraft</title>
      </Helmet>

      <main>
        <PageTitle title="termos e condições" subtitle="termos de uso" />
        <TermsContainer className="roboto-s container">
          <h2 className="poppins-l">1. Política de Estorno</h2>
          <p>
            1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos
            PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também
            aceitamos PIX e Boleto.
          </p>
          <p>
            1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos
            PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também
            aceitamos PIX e Boleto.
          </p>
          <p>
            1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos
            PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também
            aceitamos PIX e Boleto.
          </p>
          <h2 className="poppins-l">2. Conta do Usuário</h2>
          <p>
            2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos
            PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também
            aceitamos PIX e Boleto.
          </p>
          <h2 className="poppins-l">3. Seguro Bikcraft</h2>
          <p>
            3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos
            PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também
            aceitamos PIX e Boleto.
          </p>
        </TermsContainer>
      </main>
    </>
  );
};

export default Terms;
