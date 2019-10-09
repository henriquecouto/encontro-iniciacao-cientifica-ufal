import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cell: {
    maxWidth: 550
  },
  root: {
    overflowX: "auto"
  },
  head: {
    backgroundColor: theme.palette.tab.background
  }
}));

export default function TableSchedule({ projects }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table size="">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.cell}>Projeto</TableCell>
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
            return p.works.map((v, i) => {
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
                      >
                        <strong>{p.description}</strong>
                      </TableCell>
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
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    {v.hour}
                  </TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
