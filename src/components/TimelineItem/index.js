import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "vertical-timeline-component-for-react/dist/TimelineItem";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";

const styles = {
  datePresentationStyle: {
    background: "#bdbdbd",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 25
  },
  dateOtherStyle: {
    background: "#f5f5f5",
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 25
  }
};

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

export default function MyTimelineItem({
  itemKey,
  hour,
  title,
  description,
  author
}) {
  const classes = useStyles();

  return (
    <TimelineItem
      key={itemKey}
      dateText={hour}
      dateInnerStyle={
        title === "Apresentação"
          ? styles.datePresentationStyle
          : styles.dateOtherStyle
      }
    >
      <Paper className={classes.content}>
        {title && (
          <>
            <Grid container className={classes.grid} direction="column">
              <Grid item>
                <Typography variant="h5">{title}</Typography>
              </Grid>
            </Grid>
            <Divider />
          </>
        )}
        <Grid container className={classes.grid}>
          <Grid item xs>
            <Grid container direction="row">
              <Typography variant="body1" style={{ fontSize: 22 }}>
                {description}
              </Typography>
              <Typography variant="h6">{author}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </TimelineItem>
  );
}
