import React, { useState } from "react";
import { Tab, Tabs, Typography, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Opening from "../Opening";
import SessionOne from "../SessionOne";
import SessionTwo from "../SessionTwo";
import SessionThree from "../SessionThree";

const StyledTabs = withStyles(theme => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
    "& > div": {
      width: "100%",
      backgroundColor: theme.palette.tab.indicator
    }
  }
}))(props => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <div /> }}
    variant="scrollable"
    scrollButtons="desktop"
  />
));

const StyledTab = withStyles(theme => ({
  root: {
    color: "#212121",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    // marginRight: theme.spacing(1),
    zIndex: 1,
    minWidth: 300
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  tabs: {
    backgroundColor: theme.palette.tab.background,
    display: "flex",
    justifyContent: "center"
  },
  content: {
    padding: theme.spacing(3),
    textAlign: "justify"
  }
}));

export default function Schedule() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="programacao">
      <div className={classes.tabs}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="TER - 29/10 (ABERTURA)" />
          <StyledTab label="QUA - 30/10 (SESSÃO 1)" />
          <StyledTab label="QUA - 30/10 (SESSÃO 2)" />
          <StyledTab label="QUA - 30/10 (SESSÃO 3)" />
        </StyledTabs>
      </div>

      <Grid container justify="center">
        <Grid container className={classes.content}>
          {value === 0 && <Opening />}
          {value === 1 && <SessionOne />}
          {value === 2 && <SessionTwo />}
          {value === 3 && <SessionThree />}
        </Grid>
      </Grid>
    </div>
  );
}
