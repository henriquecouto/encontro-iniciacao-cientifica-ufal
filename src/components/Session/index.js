import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TableSchedule from "../Table";

export default function Session({ local, coordinator, evaluator, projects }) {
  return (
    <Grid
      container
      alignItems="center"
      style={{ marginTop: 20, marginBottom: 20 }}
      direction="column"
    >
      <Typography variant="h4">{local}</Typography>
      <Typography variant="h6">Coordenador da Sessão: {coordinator}</Typography>
      <Typography variant="h6">Avaliador Externo: {evaluator}</Typography>
      <Grid container style={{ marginTop: 40 }} justify="center">
        <TableSchedule projects={projects} />
      </Grid>
    </Grid>
  );
}
