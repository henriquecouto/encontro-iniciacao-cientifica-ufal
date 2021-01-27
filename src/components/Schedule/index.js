import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Typography,
  Avatar,
  Tooltip,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import luiz from "../../assets/luiz.png";

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
    fontSize: theme.typography.pxToRem(15),
    zIndex: 1,
    width: 210,
  },
}))((props) => <Tab disableRipple {...props} wrapped />);

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
  0: (
    <Opening
      local={
        <>
          Transmissão pelo{" "}
          <a href="https://www.youtube.com/user/AscomUfal" target="blank">
            Canal do Youtube da UFAL
          </a>
        </>
      }
      items={[
        {
          header: <Typography variant="h5">Palestra</Typography>,
          content: <Typography>A definir</Typography>,
          hour: "19:00h",
        },
      ]}
    />
  ),
  1: (
    <Opening
      local={<>Local: A definir</>}
      items={[
        {
          header: <Typography variant="h5">Abertura e boas vindas</Typography>,
          content: (
            <Typography variant="body1">
              Direção: Campus Arapiraca - UE Penedo
            </Typography>
          ),
          hour: "10:00h",
        },
        {
          header: <Typography variant="h5">Palestra</Typography>,
          content: (
            <>
              <Avatar
                alt="Palestrante"
                src={luiz}
                style={{ margin: 10, width: 150, height: 150 }}
              />
              <Grid item xs>
                <Grid container direction="row" style={{ marginTop: 15 }}>
                  <Typography variant="body1" style={{ fontSize: 22 }}>
                    Sou Graduado: e Agora? Desafios e Perspectivas da Carreira
                    Acadêmica
                  </Typography>
                  <Tooltip title="Possui graduação em Ciências Biológicas (bacharelado) pela Universidade Estadual do Sudoeste da Bahia (2006), mestrado (2008) e doutorado (2012) em Biologia Vegetal pela Universidade Federal de Pernambuco. Atualmente é professor Adjunto da Universidade Federal de Pernambuco e vinculado ao Programa de Pós-Graduação em Biologia Vegetal - PPGBV. Tem experiência na área de Genética e Evolução Vegetal, em duas linhas de pesquisa principais. Na linha de Citogenética Molecular Vegetal, realiza estudos de citogenética comparativa e evolução cromossômica de espécies nativas e cultivadas. Na linha de Sistemática Molecular, atua nas áreas de filogenia e filogeografia, bem como em citofilogenia - integração de dados cariotípicos a filogenias moleculares por meio de métodos filogenéticos comparativos.">
                    <Typography variant="h6">
                      Dr. Luiz Gustavo Rodrigues Souza - UFPE
                    </Typography>
                  </Tooltip>
                </Grid>
              </Grid>
            </>
          ),
          hour: "10:20h",
        },
      ]}
    />
  ),
  2: (
    <Session
      coordinator="Prof. Davy Baía"
      evaluator="Profa. Dra. Martha Suzana Rodrigues dos Santos Rocha - IFAL"
      local="Sessão Velho Chico"
      projects={sessionOneProjects}
    />
  ),
  3: (
    <Session
      coordinator="Profa. Ana Paula Portela"
      evaluator="Prof. Dr. Luiz Gustavo Rodrigues Souza  - UFPE"
      local="Sessão Maurício de Nassau"
      projects={sessionTwoProjects}
    />
  ),
  4: (
    <Session
      coordinator="Prof. Ivon Wilson"
      evaluator="Profa. Dra. Martha Suzana Rodrigues dos Santos Rocha - IFAL"
      local="Sessão Museu Paço Imperial"
      projects={sessionThreeProjects}
    />
  ),
  5: (
    <Session
      coordinator="Prof. Guilherme R. Demetrio"
      evaluator="Prof. Dr. Luiz Gustavo Rodrigues Souza  - UFPE"
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
        <StyledTabs value={step} onChange={handleChange}>
          <StyledTab label="SEG - 22/02 (ABERTURA) (UFAL / PROPEP)" />
          <StyledTab label="⠀⠀TER - 23/02 ⠀⠀(ABERTURA LOCAL)" />
          <StyledTab label="QUA - 24/02 - MANHÃ (SESSÃO 1)" />
          <StyledTab label="QUA - 24/02 - MANHÃ (SESSÃO 2)" />
          <StyledTab label="QUA - 24/02 - TARDE (SESSÃO 3)" />
          <StyledTab label="QUA - 24/02 - TARDE (SESSÃO 4)" />
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
