import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TableSchedule from "../Table";

const projects = [
  {
    key: "001",
    mastermind: "Juliett de Fatima Xavier da Silva",
    knowledgeArea: "Engenharia de Pesca",
    description:
      "Elaboração de subproduto a partir de processamento de tambaqui (Colossoma macropomum) comercializado no mercado público do peixe de Penedo-AL",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Jessica Melinda Santos Bezerra",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Elaboração de óleo a partir de processamento de costelinha de tambaqui (Colossoma macropomum)",
        hour: "14:00h"
      }
    ]
  },
  {
    key: "002",
    mastermind: "Petronio Alves Coelho Filho",
    knowledgeArea: "Engenharia de Pesca",
    description:
      "Influência dos níveis de proteína e caloria bruta em dietas práticas no desempenho de pós-larvas do camarão-pitu Macrobrachium carcinus em condições de laboratório",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Jessica Luciane Nascimento",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Influência do nível de proteína bruta em dietas práticas isocalóricas no desempenho zootécnico das pós-larvas do camarão-pitu Macrobrachium carcinus",
        hour: "14:15h"
      },
      {
        key: "002",
        author: "Hyago Magno Ramos",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Influência do nível de proteína bruta em dietas práticas isocalóricas na atividade das enzimas digestivas das pós-larvas do camarão-pitu Macrobrachium carcinus",
        hour: "14:25h"
      },
      {
        key: "003",
        author: "Ana Deyse Salvador Morais",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Atividades proteolíticas das enzimas digestivas de pós-larvas do camarão-pitu Macrobrachium carcinus submetidas a dietas práticas isoprotéicas com diferentes níveis de energia bruta.",
        hour: "14:35h"
      }
    ]
  },
  {
    key: "003",
    mastermind: "Claudio Luis Santos Sampaio",
    knowledgeArea: "Engenharia de Pesca",
    description: "PELD-APA Costa dos Corais-AL",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Flávio Ferreira da Silva Junior",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "A influência do Turismo nas Assembléias de Peixes Recifais na Área de Proteção Ambiental Costa dos Corais",
        hour: "14:50h"
      },
      {
        key: "002",
        author: "Gabriel Smith dos Santos",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "A influência da Pesca nas Assembléias de Peixes Recifais na Área de Proteção Ambiental Costa dos Corais",
        hour: "15:00h"
      }
    ]
  },
  {
    key: "004",
    mastermind: "Andrea Carla Guimarães de Paiva",
    knowledgeArea: "Engenharia de Pesca",
    description:
      "Atividade reprodutiva de peixes, provenientes da pesca artesanal, na RESEX Marinha Lagoa do Jequiá, Alagoas.",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Antonio Moreira Menezes",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Biologia reprodutiva de Trachelyopterus galeatus (Actinopterygii: Auchenipteridae) na RESEX Marinha Lagoa do Jequiá, Alagoas.",
        hour: "15:20h"
      }
    ]
  },
  {
    key: "005",
    mastermind: "Taciana Kramer de Oliveira Pinto",
    knowledgeArea: "Engenharia de Pesca",
    description: "PELD-APA Costa dos Corais-AL - Comunidades Bentônicas",
    hour: "Projeto",
    works: [
      {
        key: "001",
        author: "Valberth Francisco Nunes Costa",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Potencial de recrutamento de corais como indicador biológico para monitoramento de áreas de exclusão",
        hour: "15:35h"
      },
      {
        key: "002",
        author: "Anamaria Bruno de Sousa Silva",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Comunidade bentônica como bioindicador nos ambientes recifais localizados na Área de Proteção Ambiental Costa dos Corais-APACC, Alagoas",
        hour: "15:45h"
      },
      {
        key: "003",
        author: "Isabella dos Santos Bonfim",
        knowledgeArea: "Engenharia de Pesca",
        description:
          "Millepora alcicornis (Linnaeus 1758) como indicador de eficiência de zonas de exclusão em Áreas Marinhas Protegidas",
        hour: "15:55h"
      }
      // {
      //   key: "004",
      //   author: "Isabella dos Santos Bonfim",
      //   knowledgeArea: "Engenharia de Pesca",
      //   description:
      //     "Millepora alcicornis (Linnaeus 1758) como indicador de eficiência de zonas de exclusão em Áreas Marinhas Protegidas",
      //   hour: "16:05h"
      // }
    ]
  }
];

export default function SessionTwo() {
  return (
    <Grid
      container
      alignItems="center"
      style={{ marginTop: 20, marginBottom: 20 }}
      direction="column"
    >
      <Typography variant="h4">
        Local: Sala 02 - Unidade Educacional de Penedo
      </Typography>
      <Typography variant="h6">
        Coordenadores: André Magno e Uedson Jacobina
      </Typography>
      <Typography variant="h6">
        Monitores: Bruno Henrique José dos Santos e Raffael Santos Araújo
      </Typography>
      <Typography variant="h6">
        Avaliador Externo: Prof. Dr. João Vitor Campos Silva
      </Typography>
      <Grid container style={{ marginTop: 40 }} justify="center">
        <TableSchedule projects={projects} />
      </Grid>
    </Grid>
  );
}