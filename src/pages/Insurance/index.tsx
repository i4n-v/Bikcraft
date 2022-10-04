import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { PageTitle, Accordion } from "../../components";
import type { IAccordionItems } from "../../components/Accordion";
import { InsuranceCard, InformationCard } from "../../components/Cards";
import { ReactComponent as Eletrical } from "../../assets/svg/icons/eletrical.svg";
import { ReactComponent as Carbono } from "../../assets/svg/icons/carbono.svg";
import { ReactComponent as Speed } from "../../assets/svg/icons/speed.svg";
import { ReactComponent as Searcher } from "../../assets/svg/icons/searcher.svg";
import { ReactComponent as Safe } from "../../assets/svg/icons/safe.svg";
import { ReactComponent as Sustentable } from "../../assets/svg/icons/sustentable.svg";

const InsuranceContainer = styled.article`
  background: var(--c11);

  #container {
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 800px) {
    #container {
      grid-template-columns: 1fr;
    }
  }
`;

const Benefits = styled.article`
  background: var(--c12);

  > div {
    padding: 120px 20px;
  }

  > div > h2 {
    color: var(--w);
    margin-bottom: 60px;
  }

  > div > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
    gap: 40px 80px;
  }

  @media (max-width: 800px) {
    > div {
      padding: 60px 20px;
    }

    > div > h2 {
      margin-bottom: 40px;
    }

    > div > ul {
      gap: 20px;
    }
  }
`;

const Questions = styled.article`
  padding: 120px 20px;

  > h2 {
    margin-bottom: 60px;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;

    > h2 {
      margin-bottom: 40px;
    }
  }
`;

const Insurance = () => {
  const questions: IAccordionItems[] = [
    {
      title: "Qual forma de pagamento vocês aceitam ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Como posso entrar em contato ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Vocês possuem algum desconto ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Qual a garantia que possuo ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Posso parcelar no boleto ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Quantas trocas posso fazer ao ano ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
    {
      title: "Qual Bikcraft devo escolher para meu tamanho ?",
      description:
        "Aceitamos cartões de credito com as seguintes bandeiras: Visa, Mastercard, Elo e American Express. Para pagamentos a vista, também aceitamos PIX e Boleto através do PagSeguro.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Seguros | Bikcraft</title>
      </Helmet>

      <InsuranceContainer id="container">
        <PageTitle title="você seguro" subtitle="escolha o seguro" />
        <div className="container">
          <InsuranceCard
            title="PRATA"
            price={199}
            color="var(--c06)"
            items={["Duas trocas por ano", "Assitência técnica", "Suporte 08h às 18h", "Cobertura estadual"]}
          />
          <InsuranceCard
            title="OURO"
            price={299}
            color="var(--p01)"
            items={[
              "Cinco trocas por ano",
              "Assitência especial",
              "Suporte 24h",
              "Cobertura nacional",
              "Desconto em parceiros",
              "Acesso ao Clube Bikecraft",
            ]}
          />
        </div>
      </InsuranceContainer>

      <Benefits>
        <div className="container">
          <h2 className="poppins-xxl">
            nossas vantagens<span className="dot">.</span>
          </h2>
          <ul>
            <li>
              <InformationCard
                icon={<Eletrical />}
                title="Reparo Elétrico"
                description="Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra."
              />
            </li>
            <li>
              <InformationCard
                icon={<Carbono />}
                title="Reparo de Quadro"
                description="Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar."
              />
            </li>
            <li>
              <InformationCard
                icon={<Sustentable />}
                title="Sustentável"
                description="Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto."
              />
            </li>
            <li>
              <InformationCard
                icon={<Searcher />}
                title="Recuperação"
                description="Recuperamos Bikcrafts roubadas sem custo adicional para o dono. Se não conseguirmos recuperar, damos uma nova para você."
              />
            </li>
            <li>
              <InformationCard
                icon={<Safe />}
                title="Segurança"
                description="O nosso seguro garante que todo reparo seja feito com peças genuínas e de alta qualidade. Confie na Bikcraft."
              />
            </li>
            <li>
              <InformationCard
                icon={<Speed />}
                title="Rapidez"
                description="A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais."
              />
            </li>
          </ul>
        </div>
      </Benefits>

      <Questions className="container">
        <h2 className="poppins-xxl">
          perguntas frequentes<span className="dot">.</span>
        </h2>
        <Accordion items={questions} />
      </Questions>
    </>
  );
};

export default Insurance;
