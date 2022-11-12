export type BreakpointKey = 'sm' | 'md' | 'lg';

type Breakpoint = {
  [bp in BreakpointKey]: number;
};

const breakpoints: Breakpoint = {
  sm: 576,
  md: 768,
  lg: 1024,
};

export default breakpoints;
