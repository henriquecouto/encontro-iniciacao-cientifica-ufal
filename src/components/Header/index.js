import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import background from "../../assets/background.png";
import "./index.css";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: window.innerHeight,
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
          <div
            style={{
              alignSelf: "flex-start",
              padding: 60,
            }}
          >
            <Typography
              variant="h2"
              color="textSecondary"
              align="left"
              style={{ textShadow: "2px 2px 4px #212121" }}
            >
              30º Encontro de Iniciação Científica e<br />
              13º Seminário do PIBITI da UFAL
            </Typography>
          </div>
        </Hidden>
        <Hidden only={["lg", "md", "xl"]}>
          <Typography variant="h4" color="textSecondary" align="center">
            30º Encontro de Iniciação Científica e 13º Seminário do PIBITI da
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
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{
            position: "absolute",
            bottom: 10,
            right: 20,
            textShadow: "2px 2px 3px #212121",
          }}
        >
          Imagem de Adriano Virginio
          <br />
          @virginio_adriano
        </Typography>
      </Grid>
    </div>
  );
}
