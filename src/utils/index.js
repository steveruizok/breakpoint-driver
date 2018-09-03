import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1260];

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);
