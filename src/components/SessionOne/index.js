import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TableSchedule from "../Table";

const projects = [
  {
    key: "002",
    mastermind: "Kim Ribeiro Barão",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Revisão taxonômica de Dichelops Spinola, 1837 (Hemiptera: Heteroptera: Pentatomidae)",
    hour: "Projeto",
    works: [
      {
        key: "005",
        author: "Antonio Bruno Silva Farias",
        knowledgeArea: "Ciências Biológicas",
        description: "Revisão taxonômica de Dichelops Spinola, 1837",
        hour: "08:00h"
      }
    ]
  },
  {
    key: "003",
    mastermind: "Ana Paula de Almeida Portela da Silva",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Seleção de Linhagens de Fungos Entomopatogênicos e sua Associação com Extratos Vegetais, para Utilização no Controle Biológico de Pragas",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "Valdenia Tavares da Silva",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Avaliação do Nível de Compatibilidade de Fungos Entomopatogênicos do Complexo FIESC (Fusarium incarnatum-equiset) com Extrato da Folha de Mamona (Ricinus Communis) para o Controle Biológico de Pragas",
        hour: "08:15h"
      }
    ]
  },
  {
    key: "004",
    mastermind: "Camila Souza Porto",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Sistemas aquoso bifásicos compostos por polietilenoglicol e sais empregados no desenvolvimento de processo de purificação de frutosiltransferase por microrganismos isolados da Caatinga",
    hour: "Projeto",
    works: [
      {
        key: "007",
        author: "Thayanne Samille da Silva Santos",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Cinética e termodinâmica de frutosiltransferase de origem microbiana",
        hour: "08:30h"
      },
      {
        key: "008",
        author: "Talis Bruno Santos Silva",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Partição e perfil eletroforético de moléculas bioativas em sistema bifásico aquosos (PEG/fosfato +NaCl)",
        hour: "08:40h"
      },
      {
        key: "009",
        author: "Wanessa Santos Muniz",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Partição de frutosiltransferase em sistema bifásico aquosos PEG/Sulfato de Amônia",
        hour: "08:50h"
      },
      {
        key: "010",
        author: "Michele Veríssimo dos Santos",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Efeito de campo eletromagnético na partição de frutosiltransferase em sistema aquoso bifásico.",
        hour: "09:00h"
      }
    ]
  },
  {
    key: "005",
    mastermind: "Ana Paula de Almeida Portela da Silva",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Seleção de Linhagens de Fungos Entomopatogênicos e sua Associação com Extratos Vegetais, para Utilização no Controle Biológico de Pragas",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "David Farias Silva",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Análise da Compatibilidade de Fungo Emtomopatogênico Isaria Javanica com Extrato de Folhas de Ricinus Communis",
        hour: "09:30h"
      },
      {
        key: "007",
        author: "Vanessa Mendes da Silva",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Análise da Compatibilidade de Isaria Farinosa com Extrato de Ricinnus Communis por Meio de Parâmetros Biológicos",
        hour: "09:40h"
      }
    ]
  },
  {
    key: "006",
    mastermind: "Milena Dutra da Silva",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Remanescentes Vegetacionais em uma Unidade de Conservação: diagnóstico qualitativo e quantitativo e monitoramento da vegetação",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "Luziene Seixas dos Santos",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Substituição da Vegetação Natural na APA da Marituba do Peixe?",
        hour: "10:00h"
      },
      {
        key: "007",
        author: "Rosy Valeria da Rocha Lopes",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Estrutura da Paisagem na APA da Marituba do Peixe: Dinâmica Espaço-Temporal dos Fragmentos Vegetacionais Remanescentes",
        hour: "10:10h"
      },
      {
        key: "008",
        author: "Beatriz Alves Ribeiro",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Sensoriamento Remoto Aplicado a Avaliação dos Fragmentos Vegetacionais Remanescentes na APA da Marituba do Peixe: comportamento espectral da vegetação",
        hour: "10:20h"
      },
      {
        key: "009",
        author: "Lidiane Matias",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Mapeamento Diagnóstico de Susceptibilidade Ambiental dos Fragmentos Vegetacionais em uma Unidade de Conservação",
        hour: "10:30h"
      }
    ]
  },
  {
    key: "007",
    mastermind: "Uedson Pereira Jacobina",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Avaliando Estoques Pesqueiros com DNA Barcode ao Longo de um Gradiente Latitudinal no Atlântico Ocidental",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Leandro Ferreira dos Santos",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Avaliando os Efeitos da Escala Geográfica Sobre a Variação Genética em Espécies de Peixes Circumtropicais com DNA Barcode",
        hour: "11:00h"
      },
      {
        key: "002",
        author: "Alany Itala Pontes Nascimento",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Filogeografia Comparada com DNA Barcode em Elasmobrânquios Circumtropicais",
        hour: "11:10h"
      }
    ]
  },
  {
    key: "008",
    mastermind: "Guilherme Ramos Demetrio Ferreira",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Levantamento e fenologia das espécies de Eriocaulaceae na APA da Marituba do Peixe, Penedo, Alagoas, Brasil",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Fábio Ferreira da Silva",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Comparação do conhecimento acumulado pela literatura e dos dados coletados no projeto a respeito da florística e fenologia de Eriocaulaceae em Alagoas",
        hour: "11:30h"
      },
      {
        key: "002",
        author: "Juciane Alves dos Santos",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Levantamento e Fenologia de espécies de Eriocaulaceae da APA da Marituba.",
        hour: "11:40h"
      }
    ]
  },
  {
    key: "009",
    mastermind: "Igor da Mata Ribeiro Pimental de Oliveira",
    knowledgeArea: "OCEANOGRAFIA",
    description:
      "Análise das Condições Ambientais do Estuário do Rio São Francisco e Suas Influências Sobre a Produção Pesqueira",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "JHENNIPHER DA SILVA PEREIRA",
        knowledgeArea: "OCEANOGRAFIA",
        description:
          "Estuário do Rio São Francisco: Variabilidade ambiental e suas influências sobre a produção pesqueira",
        hour: "12:00h"
      }
    ]
  },
  {
    key: "001",
    mastermind: "Alexandre Ricardo de Oliveira",
    knowledgeArea: "Ciências Biológicas",
    description:
      "Caracterização do Manguezal do Complexo Estaurino-Lagunar Mundaú-Manguaba - CELMM: Fitossociologia, Composição de Algas, Resíduos Sólidos e Análise Abiótica",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Lucelia Lima Farias",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Análise abiótica da água do manguezal do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
        hour: "12:15h"
      },
      {
        key: "002",
        author: "Vitória Petra de Oliveira Barros",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Estrutura dos bosques de mangue do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
        hour: "12:25h"
      },
      {
        key: "003",
        author: "Pedro Henrique Bruno de Souza",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Levantamento da diversidade de algas dos bosques de mangue do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
        hour: "12:35h"
      },
      {
        key: "004",
        author: "William Thiago da Silva Costa Simões",
        knowledgeArea: "Ciências Biológicas",
        description:
          "Qualificação e quantificação dos resíduos sólidos presentes no manguezal do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
        hour: "12:45h"
      }
    ]
  }
];

export default function SessionOne() {
  return (
    <Grid
      container
      alignItems="center"
      style={{ marginTop: 20, marginBottom: 20 }}
      direction="column"
    >
      <Typography variant="h4">Local: Unidade Educacional de Penedo</Typography>
      <Typography variant="h6">
        Coordenador da Sessão: Prof. Júlio Inácio Neto
      </Typography>
      <Typography variant="h6">
        Monitor da Sessão: Pablo Felipe Campos dos Santos
      </Typography>
      <Typography variant="h6">
        Avaliador Externo: Prof. Dr. João Vitor Campos Silva - UFAL
      </Typography>
      <Grid container style={{ marginTop: 40 }} justify="center">
        <TableSchedule projects={projects} />
      </Grid>
    </Grid>
  );
}
