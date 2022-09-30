import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import { PageTitle } from "../../components";
import { Input, Textarea } from "../../components/Inputs";
import { Button } from "../../components/Buttons";
import { Link } from "react-router-dom";
import { StoreCard } from "../../components/Cards";
import local from "../../assets/svg/icons/local.svg";
import email from "../../assets/svg/icons/email.svg";
import cellphone from "../../assets/svg/icons/cellphone.svg";
import rj from "../../assets/img/stores/rj.jpg";
import sp from "../../assets/img/stores/sp.jpg";
import { ReactComponent as Instagram } from "../../assets/svg/social/instagram-p.svg";
import { ReactComponent as Facebook } from "../../assets/svg/social/facebook-p.svg";
import { ReactComponent as Youtube } from "../../assets/svg/social/youtube-p.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, var(--c11) 600px, var(--c01) 0px);
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;

  > section {
    padding: 60px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    > section {
      padding: 20px;
    }
  }
`;

const ContactSection = styled.section`
  background: var(--c12);
  border-radius: 5px 0px 0px 5px;

  > h2 {
    color: var(--w);
    margin-bottom: 60px;
  }

  .locale {
    color: var(--c04);
    margin-bottom: 32px;
    background: url(${local}) no-repeat 0px 2px;
    padding-left: 28px;
  }

  .locale > p {
    margin-bottom: 8px;
  }

  
  > address {
    color: var(--c04);
    margin-bottom: 60px;
  }

  address > a {
    display: block;
    max-width: max-content;
    margin-bottom: 8px;
    padding-left: 28px;
  }

  address > a:hover {
    color: var(--w);
  }

  address > a:nth-child(2) {
    margin-bottom: 32px;
  }

  address > a:first-child {
    background: url(${email}) no-repeat 0px 2px;
  }

  address > a:last-child {
    background: url(${cellphone}) no-repeat 0px 2px;
  }

  .social {
    display: flex;
    gap: 32px;
    padding-left: 28px;
  }

  @media (max-width: 800px) {
    border-radius: 5px 5px 0px 0px;

    address, > h2 {
      margin-bottom: 32px;
    }

    .social {
      margin-bottom: 12px;
    }
  }
`;

const FormSection = styled.section`
  background: var(--w);
  border-radius: 0px 5px 5px 0px;
  
  > form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  div:nth-child(3), div:nth-child(4), button {
    grid-column: 1/-1;
  }
  
  @media (max-width: 800px) {
    border-radius: 0px 0px 5px 5px;
  }

  @media (max-width: 600px) {
    > form {
      grid-template-columns: 1fr;
    }
  }
`;

const Stores = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;
  padding: 120px 20px;

  > h2 {
    grid-column: 1/-1;
    margin-bottom: 60px;
  }

  @media (max-width: 800px) {
    gap: 20px;
    padding: 60px 20px;
    
    > h2 {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Termos e Condições | Bikcraft</title>
      </Helmet>

      <GlobalStyle />

      <main>
        <PageTitle title="nosso contato" subtitle="resposta em até 24h" />
        <ContactContainer className="container">
          <ContactSection className="shadow01" aria-label="Endereço">
            <h2 className="poppins-m">Loja Online</h2>
            <div className="locale roboto-s">
              <p>Rua Ali Perto, 35</p>
              <p>Rio de Janeiro - RJ</p>
              <p>Brasil - Terra - Via Láctea</p>
            </div>
            <address className="roboto-s">
              <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
              <a href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
              <a href="tel:+5581999999999">+55 81 99999-9999</a>
            </address>
            <div className="social">
              <Link to="#">
                <Instagram />
              </Link>
              <Link to="#">
                <Facebook />
              </Link>
              <Link to="#">
                <Youtube />
              </Link>
            </div>
          </ContactSection>
          <FormSection className="shadow01" aria-label="Formulário">
            <form action="#">
              <Input name="name" label="Nome" placeholder="Seu nome" />
              <Input name="phone" label="Telefone" placeholder="(81) 99999-9999" />
              <Input type="email" name="email" label="Email" placeholder="contato@email.com" />
              <Textarea name="message" label="Mensagem" placeholder="O que você precisa ?" />
              <Button>Enviar mensagem</Button>
            </form>
          </FormSection>
        </ContactContainer>
      </main>

      <Stores className="container">
        <h2 className="poppins-xxl">
          lojas locais<span className="dot">.</span>
        </h2>
        <StoreCard
          title="Rio de Janeiro"
          hour="08 - 18h seg à dom"
          image={{ src: rj, alt: "Marcação de localidade no rio de janeiro" }}
          items={[
            ["Rua Ali Perto, 35", "Rio de Janeiro - RJ"],
            ["rio@bikcraft.com", "+55 81 99999-9999"],
          ]}
        />
        <StoreCard
          title="Rio de Janeiro"
          hour="08 - 18h seg à dom"
          image={{ src: sp, alt: "Marcação de localidade em São Paulo" }}
          items={[
            ["Rua Ali Perto, 35", "São Paulo = SP"],
            ["sp@ bikcraft.com", "+55 81 99999-9999"],
          ]}
        />
      </Stores>
    </>
  );
};

export default Terms;
