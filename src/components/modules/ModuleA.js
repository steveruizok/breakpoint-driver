import React from "react";
import { ModuleTemplate } from "../ModuleTemplate";
import { css } from "react-emotion";

import Card from "../Card";
import Wodge from "../Wodge";

export const ModuleA = props => {
  const styles = {
    s: {
      childCount: 3,
      primary: {
        component: Card,
        style: css`
          grid-column: span 16;
          grid-row: 1 / 7;
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
      childCount: 3,
      primary: {
        component: Card,
        style: css`
          grid-column: 1 / 17;
          grid-row: 1 / 9;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: 1 / 10;
          grid-row: 9 / 13;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: 10 / 17;
          grid-row: 9 / 13;
        `
      }
    },
    t: {
      childCount: 5,
      primary: {
        component: Card,
        style: css`
          grid-column: 1 / 9;
          grid-row: 1 / 9;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: 1 / 9;
          grid-row: 9 / 13;
        `
      },
      tertiary: {
        component: Wodge,
        style: css`
          grid-column: 9 / 17;
          grid-row: span 4;
        `
      }
    },
    d: {
      childCount: 6,
      primary: {
        component: Card,
        style: css`
          grid-column: span 8;
          grid-row: span 8;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: span 8;
          grid-row: 9 / 13;
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
      childCount: 6,
      primary: {
        component: Card,
        style: css`
          grid-column: span 8;
          grid-row: span 8;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: span 8;
          grid-row: 9 / 13;
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
