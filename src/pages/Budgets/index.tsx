import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { PageTitle, Radio } from "../../components";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Inputs";
import { BudgetCard } from "../../components/Cards";
import nimbus from "../../assets/img/bikes/nimbus.jpg";
import magic from "../../assets/img/bikes/magic.jpg";
import nebula from "../../assets/img/bikes/nebula.jpg";
import bottomLeft from "../../assets/svg/decorations/bottom-left.svg";
import bottomRight from "../../assets/svg/decorations/bottom-right.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, var(--c11) 600px, var(--c01) 0px);
  }
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 5fr 7fr;
  padding-bottom: 120px;

  h2 {
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
  }

  h2:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 8px;
    background: var(--p01);
    position: absolute;
    left: -12px;
  }

  @media (max-width: 1200px) {
    > div {
      padding: 32px;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled.div`
  background: var(--c12) url(${bottomLeft}) no-repeat bottom 20px left 20px;
  padding: 60px;
  border-radius: 5px 0px 0px 5px;   
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: 20px;

  h2, #bikcraft, #plan, #bikcraft ~ div {
    grid-column: 1/-1;
  }

  > h2 {
    color: var(--c05);
  }

  > div {
    display: grid;
    gap: 20px;
  }

  > div > h2 {
    color: var(--c05);
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    border-radius: 5px 5px 0px 0px;
    background: var(--c12);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Datas = styled.div`
  background: var(--w) url(${bottomRight}) no-repeat bottom 20px right 20px;
  border-radius: 0px 5px 5px 0px; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 60px;
  
  > h2 {
    grid-column: 1/-1;
    color: var(--c09);
  }

  > h2:nth-child(n + 2) {
    margin-top: 20px;
  }

  div:nth-child(4), div:nth-child(5), button {
    grid-column: 1/-1;
  }
  
  @media (max-width: 800px) {
    border-radius: 0px 0px 5px 5px;
    background: var(--w);
  }

  @media (max-width: 600px) {    
    grid-template-columns: 1fr;    
  }
`;

const Budgets = () => {
  const [type, setType] = useState<string>();
  const [product, setProduct] = useState<string>();

  const cards = [
    { name: "Nimbus Stark", image: nimbus },
    { name: "Magic Might", image: magic },
    { name: "Nebula Cosmic", image: nebula },
  ];

  return (
    <>
      <Helmet>
        <title>Orçamentos | Bikcraft</title>
      </Helmet>

      <GlobalStyle />

      <main>
        <PageTitle title="solicite um orçamento" subtitle="cotações no seu email" />
        <FormContainer className="container">
          <Product className="shadow01">
            <h2 className="poppins-xs">Bikcraft ou seguro ?</h2>
            <Radio
              name="type"
              onChange={({ target: { value } }) => setType(value)}
              radios={[
                { label: "Bikcraft", value: "bikcraft" },
                { label: "Seguro", value: "insurance" },
              ]}
            />
            {type === "bikcraft" && (
              <>
                <div id="bikcraft">
                  <h2 className="poppins-xs">Escolha a sua:</h2>
                  <Radio
                    name="product"
                    onChange={({ target: { value } }) => setProduct(value)}
                    radios={[
                      { label: "Nimbus Stark", before: "R$ 4999", value: "Nimbus Stark" },
                      { label: "Magic Might", before: "R$ 2499", value: "Magic Might" },
                      { label: "Nebula Cosmic", before: "R$ 3999", value: "Nebula Cosmic" },
                    ]}
                  />
                </div>
                {cards.map(
                  ({ name, image }) => name === product && <BudgetCard key={name} image={{ src: image, alt: "" }} />
                )}
              </>
            )}
            {type === "insurance" && (
              <div id="plan">
                <h2 className="poppins-xs">Escolha o plano:</h2>
                <Radio
                  name="plan"
                  radios={[
                    { label: "Prata", before: "R$ 199", value: "silver" },
                    { label: "Ouro", before: "R$ 299", value: "gold" },
                  ]}
                />
              </div>
            )}
          </Product>
          <Datas className="shadow01">
            <h2 className="poppins-xs">dados pessoais</h2>
            <Input name="name" label="Nome" />
            <Input name="last_name" label="Sobrenome" />
            <Input name="cpf" label="CPF" placeholder="000.000.000-00" />
            <Input type="email" name="email" label="Email" />
            <h2 className="poppins-xs">endereço</h2>
            <Input name="cep" label="CEP" />
            <Input type="number" name="number" label="Número" />
            <Input name="logradouro" label="Logradouro" placeholder="Rua, avenida..." />
            <Input name="district" label="Bairro" />
            <Input name="city" label="Cidade" />
            <Input name="state" label="Estado" />
            <Button>Solicitar orçamento</Button>
          </Datas>
        </FormContainer>
      </main>
    </>
  );
};

export default Budgets;
