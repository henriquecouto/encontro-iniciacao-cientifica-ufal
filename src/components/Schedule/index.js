import React, { useState } from "react";
import { Tab, Tabs, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Opening from "../Opening";
import Session from "../Session";
import {
  sessionOneProjects,
  sessionTwoProjects,
  sessionThreeProjects,
  sessionFourProjects,
} from "../../constants/sessionsProjects";

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
    "& > div": {
      width: "100%",
      backgroundColor: theme.palette.tab.indicator,
    },
  },
}))((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <div /> }}
    variant="scrollable"
    scrollButtons="desktop"
  />
));

const StyledTab = withStyles((theme) => ({
  root: {
    color: "#212121",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    // marginRight: theme.spacing(1),
    zIndex: 1,
    minWidth: 300,
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabs: {
    backgroundColor: theme.palette.tab.background,
    display: "flex",
    justifyContent: "center",
  },
  content: {
    padding: theme.spacing(3),
    textAlign: "justify",
  },
}));

const steps = {
  0: <Opening />,
  1: (
    <Session
      coordinator="A definir"
      evaluator="A definir"
      local="Sessão Velho Chico"
      projects={sessionOneProjects}
    />
  ),
  2: (
    <Session
      coordinator="A definir"
      evaluator="A definir"
      local="Sessão Maurício de Nassau"
      projects={sessionTwoProjects}
    />
  ),
  3: (
    <Session
      coordinator="A definir"
      evaluator="A definir"
      local="Sessão Museu Paço Imperial"
      projects={sessionThreeProjects}
    />
  ),
  4: (
    <Session
      coordinator="A definir"
      evaluator="A definir"
      local="Sessão Teatro Sete Setembro"
      projects={sessionFourProjects}
    />
  ),
};

export default function Schedule() {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  const handleChange = (event, newStep) => {
    setStep(newStep);
  };

  return (
    <div id="programacao">
      <div className={classes.tabs}>
        <StyledTabs
          value={step}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="SEG - 22/02 (ABERTURA)" />
          <StyledTab label="TER - 23/02 - MANHÃ (SESSÃO 1)" />
          <StyledTab label="TER - 23/02 - MANHÃ (SESSÃO 2)" />
          <StyledTab label="TER - 23/02 - TARDE (SESSÃO 3)" />
          <StyledTab label="TER - 23/02 - TARDE (SESSÃO 4)" />
        </StyledTabs>
      </div>

      <Grid container justify="center">
        <Grid container className={classes.content}>
          {steps[step]}
        </Grid>
      </Grid>
    </div>
  );
}
