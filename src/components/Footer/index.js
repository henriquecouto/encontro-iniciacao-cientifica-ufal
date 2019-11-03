import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.tab.indicator,
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "justify"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" className={classes.root} id="sobre">
        <Typography variant="h4">Sobre o Encontro</Typography>
        <Typography variant="h6" style={{ marginTop: 30 }}>
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
          apresentação de trabalhos das mais diversas áreas de conhecimento,
          tais como, <strong>Ciências Biológicas</strong>,{" "}
          <strong>Ciências da Computação</strong>,{" "}
          <strong>Engenharia de Pesca</strong>,{" "}
          <strong>Engenharia Química</strong>, <strong>Engenharia Civil</strong>
          , <strong>Educação</strong>, <strong>Física</strong>,
          <strong>Geografia</strong> e <strong>Turismo</strong>. Deste modo,
          convidamos toda a comunidade acadêmica e o público em geral para
          participar da programação do nosso{" "}
          <strong>29º encontro PIBIC e PIBITI</strong>. Prestigie as
          apresentações e veja como as{" "}
          <strong>
            pesquisas desenvolvidas na nossa universidade beneficiam, impactam e
            desenvolvem o nosso país, estado e região
          </strong>
          .<br />
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
              src={require("../../assets/logo-ufal-color.png")}
              alt="logo ufal colorida"
              style={{ height: 80 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
