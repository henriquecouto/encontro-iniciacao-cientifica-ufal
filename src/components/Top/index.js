import React from "react";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logoUfal from "../../assets/logo-ufal-preto-branco.png";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Top() {
  const classes = useStyles;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container alignItems="center" direction="row">
              <Grid item>
                <img src={logoUfal} alt="logo ufal" height={80} />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={classes.title}>
                  Congresso de Iniciação Cientifica e Congresso do PIBITI da
                  UFAL
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" style={{ height: "100%" }}>
              <a href="/#" style={{ textDecoration: "none", color: "inherit" }}>
                <Button color="inherit">Início</Button>
              </a>
              <a
                href="#programacao"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">Programação</Button>
              </a>
              {/* <a
                href="#fotos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">Fotos</Button>
              </a> */}
              <a
                href="#sobre"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit">Sobre</Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
