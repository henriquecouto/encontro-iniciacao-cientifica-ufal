import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import "./index.css";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../../assets/background.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: window.innerHeight
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: window.innerHeight }}
        direction="column"
      >
        <Hidden only={["sm", "xs"]}>
          <Typography variant="h2" color="textSecondary" align="center">
            29º Encontro de Iniciação Científica e 12º Seminário do PIBITI da
            UFAL
          </Typography>
        </Hidden>
        <Hidden only={["lg", "md", "xl"]}>
          <Typography variant="h4" color="textSecondary" align="center">
            29º Encontro de Iniciação Científica e 12º Seminário do PIBITI da
            UFAL
          </Typography>
        </Hidden>
        <Grid container>
          <a href="#programacao">
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
