import { TypographyAligns, TypographyDict, TypographyFontWeight } from './type';

const typography: TypographyDict = {
  'display-display1': {
    fontSize: 34,
    lineHeight: 54,
    fontWeight: TypographyFontWeight.bold,
  },
  'display-display2': {
    fontSize: 28,
    lineHeight: 46,
    fontWeight: TypographyFontWeight.bold,
  },
  'display-display3': {
    fontSize: 24,
    lineHeight: 38,
    fontWeight: TypographyFontWeight.bold,
  },
  'display-display4': {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-headline-bold': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-headline-medium': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: TypographyFontWeight.medium,
  },
  'interface-headline-regular': {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: TypographyFontWeight.regular,
  },
  'interface-body1-bold': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-body1-medium': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: TypographyFontWeight.medium,
  },
  'interface-body1-regular': {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: TypographyFontWeight.regular,
  },
  'interface-body2-bold': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-body2-medium': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: TypographyFontWeight.medium,
  },
  'interface-body2-regular': {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: TypographyFontWeight.regular,
  },
  'interface-detail-bold': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-detail-medium': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: TypographyFontWeight.medium,
  },
  'interface-detail-regular': {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: TypographyFontWeight.regular,
  },
  'interface-caption-bold': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: TypographyFontWeight.bold,
  },
  'interface-caption-medium': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: TypographyFontWeight.medium,
  },
  'interface-caption-regular': {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: TypographyFontWeight.regular,
  },
  'button-large': { fontSize: 16, fontWeight: TypographyFontWeight.bold },
  'button-medium': { fontSize: 16, fontWeight: TypographyFontWeight.medium },
  'button-small': { fontSize: 14, fontWeight: TypographyFontWeight.medium },
  'button-tiny': { fontSize: 12, fontWeight: TypographyFontWeight.medium },
  'link-large': { fontSize: 16, fontWeight: TypographyFontWeight.medium },
  'link-medium': { fontSize: 14, fontWeight: TypographyFontWeight.medium },
  'link-small': { fontSize: 12, fontWeight: TypographyFontWeight.medium },
} as const;

export const typographyAligns: TypographyAligns[] = ['left', 'center', 'right'];

export default typography;
