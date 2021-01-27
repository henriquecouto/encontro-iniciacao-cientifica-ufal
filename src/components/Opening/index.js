import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Typography, Grid, Avatar, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import palestrante from "../../assets/palestrante.png";

const useStyles = makeStyles((theme) => ({
  timeline: {
    maxWidth: 1000,
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  content: {
    marginTop: -10,
  },
  grid: {
    padding: theme.spacing(2),
  },
}));

const styles = {
  dateInnerStyle: {
    background: "#bdbdbd",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 25,
  },
};

export default function Opening({ local, items }) {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" style={{ marginTop: 20 }}>
        <Typography variant="h4">{local}</Typography>
      </Grid>
      <Timeline lineColor="#bdbdbd" className={classes.timeline}>
        {items?.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              dateText={item.hour}
              dateInnerStyle={styles.dateInnerStyle}
            >
              <Paper className={classes.content}>
                <Grid container className={classes.grid} direction="column">
                  <Grid item>{item.header}</Grid>
                </Grid>
                <Divider />
                <Grid container className={classes.grid}>
                  {item.content}
                </Grid>
                {/* 
            <Grid container className={classes.grid}>
              <Avatar
              alt="Palestrante"
              // src={palestrante}
              className={classes.avatar}
              />
              <Grid item xs>
              <Grid container direction="row" style={{ marginTop: 15 }}>
              <Typography
              variant="body1"
              style={{ fontSize: 22 }}
              ></Typography>
              <Typography variant="h6">Palestrante: A definir</Typography>
              </Grid>
              </Grid>
            </Grid> */}
              </Paper>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
