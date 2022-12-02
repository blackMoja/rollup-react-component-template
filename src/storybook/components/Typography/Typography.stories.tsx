import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Typography from '../../../components/Typography';
import typographyDict, {
  typographyAligns,
} from '../../../foundation/typography/typography';
import { colors } from '../../../foundation/colors/colors';
import { parsedTypoDict } from '../../utils/foundation';
import { pascalize, pascaliseCamelGroup } from '../../utils/format';
import type { TypographyVariants } from '../../../foundation/typography/type';

const variantOptions = Object.keys(typographyDict);
const colorOptions = Object.keys(colors);

type TypographyProps = React.ComponentProps<typeof Typography>;

export default {
  title: 'Foundations/Typography',
  component: Typography,
  argTypes: {
    children: {
      description: 'Text',
      name: '텍스트',
      table: {
        defaultValue: {
          summary: '숨고에서 231,162명의 고객이\n집 인테리어 고수를 찾았어요',
        },
      },
      control: {
        type: 'text',
      },
    },
    variant: {
      description: 'Text Variant',
      table: {
        defaultValue: { summary: 'display-display1' },
      },
      options: variantOptions,
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'Font Color',
      table: {
        defaultValue: { summary: 'text-primary' },
      },
      options: colorOptions,
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'Text Align',
      options: typographyAligns,
      control: {
        type: 'select',
      },
    },
    // disable
    as: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: 'display-display1',
    color: 'text-primary',
    children: '숨고에서 231,162명의 고객이\n집 인테리어 고수를 찾았어요',
  },
} as Meta<TypographyProps>;

export const All: Story<TypographyProps> = (args) => {
  const { children, variant, ...props } = args;
  return (
    <div>
      {Object.entries(parsedTypoDict).map(([groupKey, groupVariant]) => (
        <div key={groupKey} className="d-flex d-col my-10">
          <Typography variant="display-display2">
            {pascalize(groupKey)}
          </Typography>
          <div style={{ borderTop: '1px solid black' }}>
            {Object.entries(groupVariant).map(
              ([key, { fontSize, fontWeight, lineHeight }]) => (
                <div key={key} className="d-flex d-col my-8 gap-2">
                  <Typography
                    {...props}
                    variant={`${groupKey}-${key}` as TypographyVariants}
                    as="span"
                  >
                    {children}
                  </Typography>
                  <div className="d-flex align-center gap-2">
                    <Typography
                      variant="interface-body1-bold"
                      as="span"
                    >{`[${pascaliseCamelGroup(key)}]`}</Typography>
                    <Typography variant="interface-body2-regular" as="span">
                      <b>Font Weight</b>&nbsp;&nbsp;
                      {fontWeight}&nbsp;&nbsp;
                      <b>Font Size</b>&nbsp;&nbsp;
                      {`${fontSize}px`}&nbsp;&nbsp;
                      <b>Line Height</b>&nbsp;&nbsp;
                      {lineHeight ?? 'Auto'}&nbsp;&nbsp;
                      <b>Letter Spacing</b>&nbsp;&nbsp;
                      {'0%'}
                    </Typography>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Default: Story<TypographyProps> = (args) => {
  const { children, ...props } = args;
  return <Typography {...props}>{children}</Typography>;
};

All.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
