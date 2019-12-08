import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../../libs/react-material-ui-carousel";

import { storage } from "../../firebase";

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
  const [photos, setPhotos] = useState([]);

  const addPhoto = url => {
    setPhotos(old => [...old, url]);
  };

  useEffect(() => {
    const loadPhotos = () => {
      const photosNames = [...Array(33).keys()];

      photosNames.forEach(v => {
        storage
          .ref("photos")
          .child(`${v}.jpeg`)
          .getDownloadURL()
          .then(url => {
            addPhoto(url);
          });
      });
    };

    loadPhotos();
  }, []);

  return (
    <Grid container justify="center" className={classes.root} id="fotos">
      <Typography variant="h4">Fotos</Typography>
      <Grid container style={{ marginTop: 40 }}>
        <Paper style={{ padding: 10 }}>
          <Carousel interval={8000} animation="slide">
            {photos.map((v, i) => {
              return (
                <img
                  key={i}
                  src={v}
                  alt={i}
                  style={{ width: "100%", height: 700, objectFit: "cover" }}
                />
              );
            })}
          </Carousel>
        </Paper>
      </Grid>
    </Grid>
  );
}
