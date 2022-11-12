// basic color
type BasicColorVariant =
  | '050'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type BasicColorKey =
  | 'teal'
  | 'skyblue'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'gray'
  | 'bluegray';
export type BasicColor = `${BasicColorKey}-${BasicColorVariant}`;

type AlphaVariant = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type AlphaKey = 'black' | 'white';
export type Alpha = `${AlphaKey}-${AlphaVariant}`;

// Gradation
export type Gradient = 'gradient-teal';

// Semantic Colors
type SemanticBasicColorVariant = 'main' | 'thick' | 'strong' | 'light';
type SemanticBasicColorKey =
  | 'primary'
  | 'secondary'
  | 'informative'
  | 'negative'
  | 'positive'
  | 'attentive';
type SemanticBasicColor =
  `${SemanticBasicColorKey}-${SemanticBasicColorVariant}`;

type SemanticTextVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'white'
  | 'placeholder';
type SemanticBorderVariant = 'hierarchy1' | 'hierarchy2' | 'on-surface';
type SemanticCommonVariant = 'white' | 'black';
type SemanticBackgroundVariant =
  | 'base'
  | 'grouped-base'
  | 'grouped-contents'
  | 'skeleton';
type SemanticFillVariant = 'fill0' | 'fill1' | 'fill2' | 'fill3';
type SemanticDisabledVariant = 'background' | 'text' | 'border' | 'fill';
type SemanticDimVariant = 'base' | 'thick';
type SemanticSpecificColor =
  | `text-${SemanticTextVariant}`
  | `border-${SemanticBorderVariant}`
  | `common-${SemanticCommonVariant}`
  | `background-${SemanticBackgroundVariant}`
  | `fill-${SemanticFillVariant}`
  | `disabled-${SemanticDisabledVariant}`
  | `dim-${SemanticDimVariant}`;

export type SemanticColor = SemanticBasicColor | SemanticSpecificColor;

export type BaseColor = BasicColor | Alpha | SemanticColor;
export type Color = BaseColor | Gradient;

// codegen을 위한 dictionary
export type ColorConstDic<TColorGroup extends Color> = Record<
  TColorGroup,
  string
>;

export type ColorKey = keyof Color;
