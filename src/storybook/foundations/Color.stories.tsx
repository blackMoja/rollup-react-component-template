import { Meta, Story } from '@storybook/react';
import React from 'react';
import Typography from '../../Typography';
import { parsedBasicColors } from '../utils/foundation';
import { pascalize } from '../utils/format';
import { gradients } from '../../foundation/colors/colors';

export default {
  parameters: {
    layout: 'centered',
  },
  title: 'Foundations/Color',
} as Meta;

export const All: Story = () => (
  <div>
    {Object.entries(parsedBasicColors).map(([colorKey, colors]) => (
      <div className="my-8" key={colorKey}>
        <Typography variant="display-display3" color="black-100" as="h1">
          {pascalize(colorKey)}
        </Typography>
        <div>
          {Object.entries(colors)
            .sort(([vA], [vB]) => Number(vA) - Number(vB))
            .map(([variant, value], index) => (
              <div
                key={index}
                className={`color sg-bg-color-${colorKey}-${variant}`}
              >
                <Typography variant="interface-detail-bold">
                  {variant}
                </Typography>
                <Typography variant="interface-detail-bold">{value}</Typography>
              </div>
            ))}
        </div>
      </div>
    ))}
    <div>
      <Typography variant="display-display3" color="black-100" as="h1">
        Gradient
      </Typography>
      <div className="d-flex d-col">
        {Object.entries(gradients).map(([key, value]) => {
          const [_, gradientKey] = key.split('-');
          return (
            <div
              key={gradientKey}
              className={`d-flex d-col align-center justify-center p-6 sg-bg-${key}`}
            >
              <Typography variant="interface-body2-bold">
                {pascalize(gradientKey)}
              </Typography>
              <Typography variant="interface-body2-bold">{value}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

All.parameters = {
  options: {
    showPanel: false,
  },
};
