import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TableSchedule from "../Table";

const projects = [
  {
    key: "001",
    mastermind: "Diego Dermeval Medeiros da Cunha Matos",
    knowledgeArea: "Ciência da Computação",
    description: "Autoria de Ambientes Educacionais Adaptativos e Gamificados",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Aristoteles Peixoto Barros	",
        knowledgeArea: "Ciência da Computação",
        description:
          "Engenharia de requisitos, projeto arquitetural e implementação backend da autoria de ambientes educacionais adaptativos e gamificados",
        hour: "08:00h"
      },
      {
        key: "002",
        author: "Daniel Gomes Chagas Pereira",
        knowledgeArea: "Ciência da Computação",
        description:
          "Modelagem do design de gamificação de ambientes adaptativos e verificação/validação da autoria de ambientes educacionais adaptativos e gamificados",
        hour: "08:10h"
      },
      {
        key: "003",
        author: "Ítalo Jonas de Moura Lima",
        knowledgeArea: "Ciência da Computação",
        description:
          "Prototipação e desenvolvimento frontend da autoria de ambientes educacionais adaptativos e gamificados",
        hour: "08:20h"
      }
    ]
  },
  {
    key: "002",
    mastermind: "Valéria Campos Cavalcante",
    knowledgeArea: "Educação",
    description: "Escolas Quilombolas em Penedo/AL: Entre o Legal e o Real	",
    hour: "Projeto",
    works: [
      {
        key: "005",
        author: "Quiteria dos Santos Lima",
        knowledgeArea: "Educação",
        description: "Escolas Quilombolas em Penedo - Currículos e Identidades",
        hour: "08:35h"
      }
    ]
  },
  {
    key: "003",
    mastermind: "Romildo dos Santos Escarpini Filho",
    knowledgeArea: "Engenharia Civil",
    description:
      "Obtenção de Propriedades Mecânicas Efetivas de Materiais Compósitos Utilizando Técnicas Numéricas de Homogeneização",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "Kevin Tenorio Lobo Martins de Souza	",
        knowledgeArea: "Engenharia Civil",
        description:
          "Obtenção de parâmetros constitutivos empregando correlação de imagens digitais",
        hour: "08:50h"
      }
    ]
  },
  {
    key: "004",
    mastermind: "Julio Inacio Holanda Tavares Neto	",
    knowledgeArea: "Engenharia Química	",
    description:
      "Metodologia para análise de viabilidade na comercialização de hipoclorito de sódio em locais remoto à sua produção.	",
    hour: "Projeto",
    works: [
      {
        key: "007",
        author: "Vanessa Regina Vieira Santos	",
        knowledgeArea: "Engenharia Química	",
        description:
          "Construção do modelo linear para a decomposição do hipoclorito de sódio	",
        hour: "09:05h"
      },
      {
        key: "008",
        author: "Daysianne Braga Fernandes	",
        knowledgeArea: "Engenharia Química	",
        description:
          "Proposição e análise de modelo matemático, identificação da Função Objetivo	",
        hour: "09:15h"
      },
      {
        key: "009",
        author: "Wallyanne Dias Rosendo	",
        knowledgeArea: "Engenharia Química	",
        description:
          "Desenvolvimento e adequação do modelo cinético para decomposição do hipoclorito na etapa de armazenamento e transporte para o Norte do Brasil",
        hour: "09:25h"
      }
    ]
  },
  {
    key: "005",
    mastermind: "José Pereira Leão Neto	",
    knowledgeArea: "Física	",
    description:
      "Estudo da geração de força de radiação acústica sobre partículas suspensa em um fluido ideal e suas aplicações	",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "Murilo Kevin Magalhães Lopes Ribeiro	",
        knowledgeArea: "Física",
        description:
          "Aplicações da força de radiação acústica em uma pequena partícula fluida devido a onda plana estacionária	",
        hour: "09:40h"
      },
      {
        key: "007",
        author: "Gilmar Ferreira da Silva	",
        knowledgeArea: "Física",
        description:
          "Estudo da força de radiação acústica em uma pequena partícula fluida devido a onda plana progressiva e suas aplicações	",
        hour: "09:50h"
      }
    ]
  },
  {
    key: "006",
    mastermind: "Geraldo Inácio Martins	",
    knowledgeArea: "Geografia",
    description:
      "ESPAÇO, TURISMO E APROPRIAÇÃO DA NATUREZA: configuração territorial, produção e reprodução da natureza sob a égide do turismo de massa no litoral Sul de Alagoas	",
    hour: "Projeto",
    works: [
      {
        key: "006",
        author: "Waleska Araújo da Rocha	",
        knowledgeArea: "Geografia",
        description:
          "A NATUREZA DOS EMPREENDIMENTOS TURÍSTICOS IMOBILIÁRIOS: configuração territorial, produção e reprodução da natureza sob a égide do turismo de massa	",
        hour: "10:10h"
      },
      {
        key: "007",
        author: "Clyvya Dayanne Pereira dos Santos	",
        knowledgeArea: "Geografia",
        description:
          "APROPRIAÇÃO/PRODUÇÃO DA NATUREZA E DO ESPAÇO EM BARRA DE SÃO MIGUEL E PRAIA DO FRANCÊS: turismo de massa, dinâmicas sociais e ambientais no litoral Sul de Alagoas	",
        hour: "10:20h"
      }
    ]
  },
  {
    key: "007",
    mastermind: "Diógenes Meneses dos Santos	",
    knowledgeArea: "Química",
    description:
      "Uso do Endocarpo do Cocos Nucífera, do Attalea Speciosa, do Mesocarpo do Theobroma Grandiflorum e de Carcaças de Crustáceos como Bioadsorvente de Baixo Custo para Adsorção e Pré-concentração de Traços de Metais Pesados e Agrotóxicos em Águas Naturais do Rio São Francisco na Cidade Ribeirinha de Penedo-AL	",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Maria Helena Gomes Soares	",
        knowledgeArea: "Química",
        description:
          "O Uso de Endocarpo do Cocos Nucifera (coco-da-praia) como Bioadsorvente de Baixo Custo para a Adsorção, Pré-Concentração e Determinação Espectrofotométrica e Colorimétrica Associado ao µPAD de Traços de Cr (VI), Pb (II), Cd (II), Hg (II), Glifosato, Ametrina, Clomazona e Carbamatos em Águas Naturais do Rio São Francisco na Cidade Ribeirinha de Penedo – AL.	",
        hour: "11:20h"
      },
      {
        key: "002",
        author: "Nicolas Lennick Bomfim de Albuquerque	",
        knowledgeArea: "Química",
        description:
          "O Uso de Mesocarpo do Theobroma Grandiflorum (Cupuaçu) como Bioadsorvente de Baixo Custo para a Adsorção, Pré-Concentração e Determinação Espectrofotométrica e Colorimétrica Associado ao µPAD de Traços de Cr (VI), Pb (II), Cd (II), Hg (II), Glifosato, Ametrina, Clomazona e Carbamatos em Águas Naturais do Rio São Francisco na Cidade Ribeirinha de Penedo – AL.	",
        hour: "11:30h"
      },
      {
        key: "003",
        author: "Maria Eduarda da Silva Nunes	",
        knowledgeArea: "Química",
        description:
          "	O Uso de Endocarpo do Attalea Speciosa (Babaçu) como Bioadsorvente de Baixo Custo para a Adsorção, Pré-Concentração e Determinação Espectrofotométrica e Colorimétrica Associado ao µPAD de Traços de Cr (VI), Pb (II), Cd (II), Hg (II), Glifosato, Ametrina, Clomazona e Carbamatos em Águas Naturais do Rio São Francisco na Cidade Ribeirinha de Penedo – AL.",
        hour: "11:30h"
      }
    ]
  },
  {
    key: "008",
    mastermind: "Renata Mayara Moreira de Lima	",
    knowledgeArea: "Turismo",
    description:
      "O Programa de Regionalização do Turismo em Alagoas: Uma avaliação do Fórum Estadual de Turismo e do Conselho Municipal de Turismo de Penedo	",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Ana Caroline Monteiro Santos	",
        knowledgeArea: "Turismo",
        description: "Desempenho do Conselho Municipal de Turismo de Penedo	",
        hour: "11:40h"
      },
      {
        key: "002",
        author: "Ana Paula Lima dos Santos	",
        knowledgeArea: "Turismo",
        description:
          "Criação e Funcionamento do Conselho Municipal de Turismo de Penedo	",
        hour: "11:50h"
      },
      {
        key: "003",
        author: "Alice de Santana Silva	",
        knowledgeArea: "Turismo",
        description: "Desempenho do Fórum Estadual de Turismo de Alagoas	",
        hour: "11:50h"
      }
    ]
  },
  {
    key: "009",
    mastermind: "Fabiana de Oliveira Lima	",
    knowledgeArea: "Turismo",
    description:
      "Diagnóstico participativo de aspectos socioculturais para o Turismo de Base Comunitária no Pixaim, Piaçabuçu-AL	",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Robson dos Santos	",
        knowledgeArea: "Turismo",
        description:
          "Aspectos socioculturais da comunidade do Pixaim, Piaçabuçu-AL pertinentes ao Turismo de Base Comunitária e sua relação com o mercado turístico local	",
        hour: "11:40h"
      },
      {
        key: "002",
        author: "Nayane Francinni Sales Vieira	",
        knowledgeArea: "Turismo",
        description:
          "Caracterização das políticas e projetos direcionados a Comunidade do Pixaim, Piaçabuçu-AL e sua relação com o mercado turístico local	",
        hour: "11:50h"
      }
    ]
  }
];

export default function SessionThree() {
  return (
    <Grid
      container
      alignItems="center"
      style={{ marginTop: 20, marginBottom: 20 }}
      direction="column"
    >
      <Typography variant="h4">
        Local: ANEXO I - Escola Manoel Soares de Melo
      </Typography>
      <Typography variant="h6">
        Coordenador da Sessão: Prof. Davy Baía
      </Typography>
      <Typography variant="h6">
        Monitores da Sessão: Valdemir Alves Santos Junior e Ana Paula Bezerra
        Hanisaka
      </Typography>
      <Typography variant="h6">
        Avaliadora Externa: Prof. Dra. Martha Suzana Rodrigues dos Santos Rocha
        - IFAL
      </Typography>
      <Grid container style={{ marginTop: 40 }} justify="center">
        <TableSchedule projects={projects} />
      </Grid>
    </Grid>
  );
}
