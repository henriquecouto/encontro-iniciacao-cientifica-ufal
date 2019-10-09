import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logoUfal from "../../assets/logo-ufal-color.png";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "justify"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root} id="sobre">
      <Typography variant="h3">Sobre o Encontro</Typography>
      <Typography variant="h5" style={{ marginTop: 30 }}>
        O{" "}
        <strong>
          Programa Institucional de Bolsas de Iniciação Cientifica (PIBIC)
        </strong>{" "}
        e o{" "}
        <strong>
          Programa Institucional de Bolsas de Iniciação em Desenvolvimento
          Tecnológico e Inovação (PIBITI)
        </strong>
        , buscam estimular os jovens do ensino superior nas atividades de
        pesquisa, aplicando metodologias, conhecimentos teóricos e práticos no
        desenvolvimento de processos e produtos aplicados na indústria e na
        academia. Este ano, o <strong>29º encontro</strong> contará com a
        apresentação de trabalhos das mais diversas áreas de conhecimento, tais
        como, <strong>Ciências Biológicas</strong>,{" "}
        <strong>Ciências da Computação</strong>,{" "}
        <strong>Engenharia de Pesca</strong>,{" "}
        <strong>Engenharia Química</strong>, <strong>Engenharia Civil</strong>,{" "}
        <strong>Educação</strong>, <strong>Física</strong>,
        <strong>Geografia</strong> e <strong>Turismo</strong>. Deste modo,
        convidamos toda a comunidade acadêmica e o público em geral para
        participar da programação do nosso{" "}
        <strong>29º encontro PIBIC e PIBITI</strong>. Prestigie as apresentações
        e veja como as{" "}
        <strong>
          pesquisas desenvolvidas na nossa universidade beneficiam, impactam e
          desenvolvem o nosso país, estado e região
        </strong>
        .
      </Typography>
      <Typography variant="h4" style={{ marginTop: 10, marginBottom: 20 }}>
        Contamos com a presença e participação de todos. Juntos demonstraremos
        que o incentivo à pesquisa é essencial para o desenvolvimento do nosso
        país.
      </Typography>
      <Typography variant="h6" align="center">
        Prof. Dr. André Araújo <br />
        Prof. Dr. Uedson Jacobina
        <br />
        Coordenação de Pesquisa
        <br />
        Campus Arapiraca - Unidade Educacional de Penedo.
      </Typography>
    </Grid>
  );
}