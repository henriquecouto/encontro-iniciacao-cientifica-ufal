import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "justify"
  }
}));

export default function Photos() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} id="fotos">
      <Typography variant="h4">Fotos</Typography>
    </Grid>
  );
}
