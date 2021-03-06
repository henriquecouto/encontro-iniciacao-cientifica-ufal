import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cell: {
    maxWidth: 550,
  },
  root: {
    overflowX: "auto",
    width: "100%",
  },
  head: {
    backgroundColor: theme.palette.tab.background,
  },
}));

export default function TableSchedule({ projects }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell} align="center">
              Orientador
            </TableCell>
            <TableCell
              className={classes.cell}
              align="center"
              style={{ minWidth: 150 }}
            >
              Área do Conhecimento
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Apresentador
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Plano de Atividades
            </TableCell>
            <TableCell className={classes.cell} align="right">
              Hora
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((p, j) => {
            return (
              <React.Fragment key={j}>
                {p.works.map((v, i) => {
                  return (
                    <TableRow
                      key={i}
                      style={{ backgroundColor: j % 2 === 0 && "#eeea" }}
                    >
                      {i === 0 && (
                        <>
                          <TableCell
                            className={classes.cell}
                            rowSpan={p.works.length}
                            align="center"
                          >
                            {p.mastermind}
                          </TableCell>
                        </>
                      )}
                      <TableCell className={classes.cell} align="center">
                        {v.knowledgeArea}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        {v.author}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        <strong>{v.description}</strong>
                        {!v.hour && (
                          <>
                            <br />
                            <Typography variant="caption">
                              Não haverá apresentação - O aluno apresentou
                              justificativa para ausência.
                            </Typography>
                          </>
                        )}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {v.hour}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {j !== projects.length - 1 && (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      style={{ backgroundColor: "rgb(224, 224, 224)" }}
                      align="center"
                    ></TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
