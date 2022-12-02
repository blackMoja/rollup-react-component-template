import type { FC, ReactNode } from 'react';

import type { BaseColor } from '@/foundation/colors/type';
import type {
  TypographyAligns,
  TypographyVariants,
} from '@/foundation/typography/type';

export interface TypographyProps {
  variant: TypographyVariants;
  color?: BaseColor;
  align?: TypographyAligns;
  as?: keyof JSX.IntrinsicElements;
  sm?: TypographyVariants;
  md?: TypographyVariants;
  lg?: TypographyVariants;
  children?: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  variant,
  color = 'text-primary',
  as: Component = 'p',
  align,
  sm,
  md,
  lg,
  children,
}) => {
  return (
    <Component
      className={[
        `sg-typo-${variant}`,
        `sg-color-${color}`,
        align && `sg-typo-align-${align}`,
        sm && `sm:sg-typo-${sm}`,
        md && `md:sg-typo-${md}`,
        lg && `lg:sg-typo-${lg}`,
      ]
        .filter((c) => c)
        .join(' ')}
    >
      {children}
    </Component>
  );
};
export default Typography;
