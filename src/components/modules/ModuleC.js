import React from "react";
import { ModuleTemplate } from "../ModuleTemplate";
import { css } from "react-emotion";

import Card from "../Card";
import Wodge from "../Wodge";

export const ModuleC = props => {
  const styles = {
    s: {
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
          grid-column: 1 / 17;
          grid-row: 9 / 13;
        `
      },
      tertiary: {
        component: Card,
        style: css`
          grid-column: span 8;
          grid-row: span 5;
        `
      }
    },
    t: {
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
          grid-column: 1 / 17;
          grid-row: 9 / 13;
        `
      },
      tertiary: {
        component: Wodge,
        style: css`
          grid-column: span 8;
          grid-row: span 4;
        `
      }
    },
    d: {
      primary: {
        component: Card,
        style: css`
          grid-column: span 12;
          grid-row: span 8;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: span 12;
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
      primary: {
        component: Card,
        style: css`
          grid-column: span 12;
          grid-row: span 8;
        `
      },
      secondary: {
        component: Wodge,
        style: css`
          grid-column: span 12;
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
