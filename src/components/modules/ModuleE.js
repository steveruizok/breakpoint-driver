import React from "react";
import { ModuleTemplate } from "../ModuleTemplate";
import { css } from "react-emotion";

import Card from "../Card";
import Wodge from "../Wodge";

export const ModuleE = props => {
  const container = css`
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 28px;
    grid-template-columns: repeat(16, 1fr);
    grid-auto-rows: auto;
    border: 1px solid #7cc;
  `;

  const styles = {
    s: {
      childCount: 1,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 13;
        `
      }
    },
    m: {
      childCount: 1,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 13;
        `
      }
    },
    t: {
      childCount: 1,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 13;
        `
      }
    },
    d: {
      childCount: 1,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 13;
        `
      }
    },
    hd: {
      childCount: 1,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 13;
        `
      }
    }
  };

  return (
    <ModuleTemplate container={container} styles={styles}>
      {props.children}
    </ModuleTemplate>
  );
};
