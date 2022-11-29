import { TypographyAligns, TypographyDict } from './type';

const typography: TypographyDict = {
  'display-display1': {
    fontSize: 34,
    lineHeight: 54,
    fontWeight: 700,
  },
  'display-display2': {
    fontSize: 28,
    lineHeight: 46,
    fontWeight: 700,
  },
  'display-display3': {
    fontSize: 24,
    lineHeight: 38,
    fontWeight: 700,
  },
  'display-display4': {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 700,
  },
  'interface-headline-bold': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 700,
  },
  'interface-headline-medium': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 500,
  },
  'interface-headline-regular': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400,
  },
  'interface-body1-bold': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  'interface-body1-medium': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  'interface-body1-regular': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  'interface-body2-bold': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 700,
  },
  'interface-body2-medium': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 500,
  },
  'interface-body2-regular': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400,
  },
  'interface-detail-bold': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 700,
  },
  'interface-detail-medium': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 500,
  },
  'interface-detail-regular': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 400,
  },
  'interface-caption-bold': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 700,
  },
  'interface-caption-medium': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 500,
  },
  'interface-caption-regular': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: 400,
  },
  'button-large': { fontSize: 16, fontWeight: 700 },
  'button-medium': { fontSize: 16, fontWeight: 500 },
  'button-small': { fontSize: 14, fontWeight: 500 },
  'button-tiny': { fontSize: 12, fontWeight: 500 },
  'link-large': { fontSize: 16, fontWeight: 500 },
  'link-medium': { fontSize: 14, fontWeight: 500 },
  'link-small': { fontSize: 12, fontWeight: 500 },
} as const;

export const typographyAligns: TypographyAligns[] = ['left', 'center', 'right'];

export default typography;
