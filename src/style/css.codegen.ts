import fs from 'fs';
import path from 'path';
import { colors, baseColors, gradients } from '../foundation/colors/colors';
import breakpoints from '../foundation/breakpoints/breakpoints';
import typographyDict, {
  typographyAligns,
} from '../foundation/typography/typography';
import type { Color } from '../foundation/colors/type';
import type { BreakpointKey } from '../foundation/breakpoints/breakpoints';

const numToRem = (size: number) => size / 16 + 'rem';
const calcLineHeight = (fs: number, lineHeight: number, fractionDigits = 8) =>
  Number(lineHeight / fs).toFixed(fractionDigits);
const breakpointKeys = Object.keys(breakpoints) as BreakpointKey[];

// Generate Color Vars
const generateColorCssVar = () =>
  Object.entries(colors)
    .map(([key, hex]) => `--${key}: ${hex}`)
    .join(';');

// Generate Responsive css
const generateResponsiveClass = (bp: BreakpointKey, css: string) =>
  `@media (min-width: ${breakpoints[bp]}px) { ${css} }`;

// Generate Color Attributes (exclude gradient)
const generateColorAttributeClass = (prefix: string, attribute: string) =>
  (Object.keys(baseColors) as Color[])
    .map((key) => `.sg-${prefix}-${key} { ${attribute}: var(--${key}) }`)
    .join('');

// Generate Gradient Background Attributes
const generateGradientBgAttributeClass = () =>
  Object.keys(gradients)
    .map(
      (key) => `
      .sg-bg-${key} { background: var(--${key}) }
    `,
    )
    .join('');

// Generate Typography Variants
const generateTypographyClass = (bp?: BreakpointKey) =>
  Object.entries(typographyDict)
    .map(([key, { fontSize: fs, fontWeight: fw, lineHeight: lh }]) => {
      const prefix = bp ? `${bp}\\:` : '';
      return `.${prefix}sg-typo-${key} { font-size: ${numToRem(
        fs,
      )}; font-weight: ${fw}; line-height: ${
        lh ? calcLineHeight(fs, lh) : 'normal'
      } }`;
    })
    .join('');

// Generate Typography Aligns
const generateTypographyAlignClasses = () =>
  typographyAligns
    .map(
      (alignClass) =>
        `.sg-typo-align-${alignClass} { text-align: ${alignClass} }`,
    )
    .join('');

const generateAllTypographyClass = () => {
  const responsiveClasses = breakpointKeys.map((bp) =>
    generateResponsiveClass(bp, generateTypographyClass(bp)),
  );
  return [generateTypographyClass(), ...responsiveClasses].join('');
};

const generateGlobalCssFile = () => {
  const cssVars = `:root {${generateColorCssVar()}}`;
  const colorClasses = generateColorAttributeClass('color', 'color');
  const backgroundColorClasses = generateColorAttributeClass(
    'bg-color',
    'background-color',
  );
  const gradientBackgroundClasses = generateGradientBgAttributeClass();
  const fillClasses = generateColorAttributeClass('fill', 'fill');
  const typographyClasses = generateAllTypographyClass();
  const typographyAlignClasses = generateTypographyAlignClasses();

  return (
    cssVars +
    colorClasses +
    backgroundColorClasses +
    gradientBackgroundClasses +
    fillClasses +
    typographyClasses +
    typographyAlignClasses
  );
};

export default function setup() {
  const filePath = path.resolve(__dirname, 'index.css');
  fs.writeFileSync(filePath, generateGlobalCssFile(), 'utf-8');
}
