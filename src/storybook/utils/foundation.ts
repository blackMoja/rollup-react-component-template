import typographyDict from '../../foundation/typography/typography';
import type {
  TypographyDisplayVariants,
  TypographyInterfaceVariants,
  TypographyButtonVariants,
  TypographyLinkVariants,
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight,
} from '../../foundation/typography/type';
import { basicColors, semanticColors } from '../../foundation/colors/colors';
import {
  AlphaKey,
  BasicColorKey,
  SemanticColor,
} from '../../foundation/colors/type';

const parseDict = <T, Y extends Record<string, unknown>>(obj: Y) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const [groupKey, ...restKey] = key.split('-');
    return {
      ...acc,
      [groupKey]: {
        ...acc[groupKey],
        [restKey.join('-')]: value,
      },
    };
  }, {} as T);

/* Typography */
type TypographyVariantValue = {
  fontSize: TypographyFontSize;
  lineHeight?: TypographyLineHeight;
  fontWeight: TypographyFontWeight;
};

type ParsedTypographyDict = {
  display: {
    [key in TypographyDisplayVariants]: TypographyVariantValue;
  };
  interface: {
    [key in TypographyInterfaceVariants]: TypographyVariantValue;
  };
  button: {
    [key in TypographyButtonVariants]: TypographyVariantValue;
  };
  link: {
    [key in TypographyLinkVariants]: TypographyVariantValue;
  };
};

export const parsedTypoDict =
  parseDict<ParsedTypographyDict, typeof typographyDict>(typographyDict);

/* Basic + Alpha Color */
type BaseColorKey = BasicColorKey | AlphaKey;

type BaseColorDict = {
  [key in BaseColorKey]: Record<string, string>;
};

export const parsedBasicColors =
  parseDict<BaseColorDict, typeof basicColors>(basicColors);

/* Semantic Color */
type SemanticColorDict = {
  [key in SemanticColor]: Record<string, string>;
};

export const parsedSemanticColors =
  parseDict<SemanticColorDict, typeof semanticColors>(semanticColors);
