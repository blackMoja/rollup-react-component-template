export type TypographyDisplayVariants =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4';
export type TypographyInterfaceVariants =
  | 'headline-bold'
  | 'headline-medium'
  | 'headline-regular'
  | 'body1-bold'
  | 'body1-medium'
  | 'body1-regular'
  | 'body2-bold'
  | 'body2-medium'
  | 'body2-regular'
  | 'detail-bold'
  | 'detail-medium'
  | 'detail-regular'
  | 'caption-bold'
  | 'caption-medium'
  | 'caption-regular';
export type TypographyButtonVariants = 'large' | 'medium' | 'small' | 'tiny';
export type TypographyLinkVariants = 'large' | 'medium' | 'small';
export enum TypographyFontWeight {
  regular = 400,
  medium = 500,
  bold = 700,
}
export type TypographyFontSize = 34 | 28 | 24 | 20 | 18 | 16 | 14 | 12 | 10;
export type TypographyLineHeight = 54 | 46 | 38 | 32 | 28 | 24 | 22 | 18 | 16;
export type TypographyDict = {
  [variant in TypographyVariants]?: {
    fontSize: TypographyFontSize;
    lineHeight?: TypographyLineHeight;
    fontWeight: TypographyFontWeight;
  };
};

export type TypographyVariants =
  | `display-${TypographyDisplayVariants}`
  | `interface-${TypographyInterfaceVariants}`
  | `button-${TypographyButtonVariants}`
  | `link-${TypographyLinkVariants}`;

export type TypographyClasses = `.sg-typo-${TypographyVariants}`;

export type TypographyAligns = 'left' | 'center' | 'right';
