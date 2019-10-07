import React from "react";
import { Timeline } from "vertical-timeline-component-for-react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyTimelineItem from "../TimelineItem";

const useStyles = makeStyles(theme => ({
  timeline: {
    maxWidth: 1000
  }
}));

const works = [
  {
    key: "001",
    author: "Orientador: Alexandre Ricardo de Oliveira",
    title: "",
    description:
      "Caracterização do Manguezal do Complexo Estaurino-Lagunar Mundaú-Manguaba - CELMM: Fitossociologia, Composição de Algas, Resíduos Sólidos e Análise Abiótica",
    hour: "Projeto"
  },
  {
    key: "002",
    author: "Lucelia Lima Farias",
    title: "Apresentação",
    description:
      "Análise abiótica da água do manguezal do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
    hour: "08:00h"
  },
  {
    key: "003",
    author: "Vitória Petra de Oliveira Barros",
    title: "Apresentação",
    description:
      "Estrutura dos bosques de mangue do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
    hour: "08:10h"
  },
  {
    key: "004",
    author: "Pedro Henrique Bruno de Souza",
    title: "Apresentação",
    description:
      "Levantamento da diversidade de algas dos bosques de mangue do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
    hour: "08:20h"
  },
  {
    key: "005",
    author: "William Thiago da Silva Costa Simões",
    title: "Apresentação",
    description:
      "Qualificação e quantificação dos resíduos sólidos presentes no manguezal do Complexo Estuarino-Lagunar Mundaú-Manguaba - CELMM",
    hour: "08:30h"
  },
  {
    key: "006",
    author: "Orientador: Kim Ribeiro Barão",
    title: "",
    description:
      "Revisão taxonômica de Dichelops Spinola, 1837 (Hemiptera: Heteroptera: Pentatomidae)",
    hour: "Projeto"
  },
  {
    key: "007",
    author: "Antonio Bruno Silva Farias",
    title: "Apresentação",
    description: "Revisão taxonômica de Dichelops Spinola, 1837",
    hour: "08:50h"
  },
  {
    key: "008",
    author: "Orientador: Ana Paula de Almeida Portela da Silva",
    title: "",
    description:
      "Seleção de Linhagens de Fungos Entomopatogênicos e sua Associação com Extratos Vegetais, para Utilização no Controle Biológico de Pragas",
    hour: "Projeto"
  },
  {
    key: "009",
    author: "Valdenia Tavares da Silva",
    title: "Apresentação",
    description:
      "Avaliação do Nível de Compatibilidade de Fungos Entomopatogênicos do Complexo FIESC (Fusarium incarnatum-equiset) com Extrato da Folha de Mamona (Ricinus Communis) para o Controle Biológico de Pragas",
    hour: "09:05h"
  },
  {
    key: "010",
    author: "Orientador: Camila Souza Porto",
    title: "",
    description:
      "Sistemas aquoso bifásicos compostos por polietilenoglicol e sais empregados no desenvolvimento de processo de purificação de frutosiltransferase por microrganismos isolados da Caatinga",
    hour: "Projeto"
  },
  {
    key: "011",
    author: "Thayanne Samille da Silva Santos",
    title: "Apresentação",
    description:
      "Cinética e termodinâmica de frutosiltransferase de origem microbiana",
    hour: "9:20h"
  },
  {
    key: "012",
    author: "Talis Bruno Santos Silva",
    title: "Apresentação",
    description:
      "Partição e perfil eletroforético de moléculas bioativas em sistema bifásico aquosos (PEG/fosfato +NaCl)",
    hour: "9:30h"
  },
  {
    key: "013",
    author: "Wanessa Santos Muniz",
    title: "Apresentação",
    description:
      "Partição de frutosiltransferase em sistema bifásico aquosos PEG/Sulfato de Amônia",
    hour: "9:40h"
  },
  {
    key: "014",
    author: "Michele Veríssimo dos Santos",
    title: "Apresentação",
    description:
      "Efeito de campo eletromagnético na partição de frutosiltransferase em sistema aquoso bifásico.",
    hour: "9:50h"
  }
];

export default function SessionOne() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" style={{ marginTop: 20 }}>
        <Typography variant="h3">
          Local: Sala 02 - Unidade Educacional de Penedo
        </Typography>
      </Grid>
      <Timeline lineColor="#bdbdbd" className={classes.timeline}>
        {works.map(v => {
          return <MyTimelineItem {...v} itemKey={v.key} />;
        })}
      </Timeline>
    </>
  );
}
