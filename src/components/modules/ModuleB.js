import React from "react";
import { ModuleTemplate } from "../ModuleTemplate";
import { css } from "react-emotion";

import Card from "../Card";
import Wodge from "../Wodge";

export const ModuleB = props => {
  const styles = {
    s: {
      childCount: 4,
      primary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 3;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 3;
        `
      },
      tertiary: {
        component: Wodge,
        style: css`
          grid-column: span 16;
          grid-row: span 3;
        `
      }
    },
    m: {
      childCount: 4,
      primary: {
        component: Card,
        style: css`
          grid-column: 1 / 9;
          grid-row: 1 / 7;
        `
      },
      secondary: {
        component: Card,
        style: css`
          grid-column: 1 / 9;
          grid-row: 7 / 13;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: 9 / 17;
          grid-row: span 6;
        `
      }
    },
    t: {
      childCount: 4,
      primary: {
        component: Card,
        style: css`
          grid-column: 1 / 9;
          grid-row: 1 / 7;
        `
      },
      secondary: {
        component: Card,
        style: css`
          grid-column: 1 / 9;
          grid-row: 7 / 13;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: 9 / 17;
          grid-row: span 6;
        `
      }
    },
    d: {
      childCount: 8,
      primary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      },
      secondary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      }
    },
    hd: {
      childCount: 8,
      primary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      },
      secondary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: span 4;
          grid-row: span 6;
        `
      }
    }
  };

  return <ModuleTemplate styles={styles}>{props.children}</ModuleTemplate>;
};
