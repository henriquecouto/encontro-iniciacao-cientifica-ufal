import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logoColor from "../../assets/logo-ufal-color.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tab.indicator,
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "justify",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" className={classes.root} id="sobre">
        <Typography variant="h4">Sobre o Congresso</Typography>
        <Typography variant="h6" style={{ marginTop: 30 }}>
          O Programa Institucional de Bolsas de Iniciação Científica (PIBIC) e o
          Programa Institucional de Bolsas de Iniciação em Desenvolvimento
          Tecnológico e Inovação (PIBITI), buscam estimular os jovens do ensino
          superior nas atividades de pesquisa, aplicando metodologias,
          conhecimentos teóricos e práticos no desenvolvimento de processos e
          produtos aplicados na indústria e na academia. Este ano, o 30º
          congresso contará com a apresentação de trabalhos das mais diversas
          áreas de conhecimento, tais como, Ciências Biológicas, Ciências da
          Computação, Engenharias Educação, Física, Geografia e Turismo, e será
          realizado de forma <strong>remota</strong>, em virtude da pandemia
          causada pela COVID-19. Bolsistas e voluntários de Iniciação Científica
          e Iniciação Tecnológica apresentarão suas pesquisas para finalização
          do{" "}
          <strong>
            Ciclo 2019 - 2020 utilizando um ambiente virtual de comunicação
          </strong>
          .
          <br />
          {/* </Typography>
      <Typography variant="h6" align="left"> */}
          Contamos com a presença e participação de todos. Juntos demonstraremos
          que o incentivo à pesquisa é essencial para o desenvolvimento do nosso
          país.
        </Typography>
        <Typography variant="h6" align="center" style={{ marginTop: 30 }}>
          Prof. Dr. André Araújo <br />
          Prof. Dr. Uedson Jacobina
          <br />
          Coordenação de Pesquisa
          <br />
          Campus Arapiraca - Unidade Educacional de Penedo.
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: "0 40px", backgroundColor: "#bdbdbd" }}
      >
        <Grid item>
          <Typography variant="body2">
            Desenvolvido pelo Grupo de Pesquisa em Estudos Avançados em Ciência
            de Dados e Engenharia de Software
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <Typography variant="body2">
              Coordenação de Pesquisa - U.E. Penedo
            </Typography>
            <img
              src={logoColor}
              alt="logo ufal colorida"
              style={{ height: 80 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
