import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Typography, Grid, Avatar, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import palestrante from "../../assets/palestrante.png";

const useStyles = makeStyles(theme => ({
  timeline: {
    maxWidth: 1000
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  content: {
    marginTop: -10
  },
  grid: {
    padding: theme.spacing(2)
  }
}));

const styles = {
  dateInnerStyle: {
    background: "#bdbdbd",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 25
  }
};

export default function Opening() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" style={{ marginTop: 20 }}>
        <Typography variant="h4">Local: Auditório do IFAL</Typography>
      </Grid>
      <Timeline lineColor="#bdbdbd" className={classes.timeline}>
        <TimelineItem
          key="001"
          dateText="14:00h"
          dateInnerStyle={styles.dateInnerStyle}
          //   bodyContainerStyle={styles.bodyContainerStyle}
        >
          <Paper className={classes.content}>
            <Grid container className={classes.grid} direction="column">
              <Typography variant="h5">Solenidade de Abertura</Typography>
            </Grid>
          </Paper>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="14:30h"
          dateInnerStyle={styles.dateInnerStyle}
        >
          <Paper className={classes.content}>
            <Grid container className={classes.grid} direction="column">
              <Grid item>
                <Typography variant="h5">Palestra</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.grid}>
              <Avatar
                alt="Palestrante"
                src={palestrante}
                className={classes.avatar}
              />
              <Grid item xs>
                <Grid container direction="row" style={{ marginTop: 15 }}>
                  <Typography variant="body1" style={{ fontSize: 22 }}>
                    Conservação na Mão do Povo: Evidências Otimistas para o
                    Futuro da Amazônia
                  </Typography>
                  <Typography variant="h6">
                    Prof. Dr. João Vitor Campos Silva
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </TimelineItem>
      </Timeline>
    </>
  );
}
