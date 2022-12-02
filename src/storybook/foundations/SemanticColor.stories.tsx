import { Meta, Story } from '@storybook/react';
import React from 'react';
import Typography from '../../components/Typography';
import { parsedSemanticColors } from '../utils/foundation';
import { pascalize, pascaliseCamelGroup } from '../utils/format';

export default {
  parameters: {
    layout: 'centered',
  },
  title: 'Foundations/SemanticColor',
} as Meta;

export const All: Story = () => (
  <div>
    {Object.entries(parsedSemanticColors).map(([colorKey, colors]) => (
      <div className="my-8" key={colorKey}>
        <Typography variant="display-display3" color="black-100" as="h1">
          {pascalize(colorKey)}
        </Typography>
        <div className="d-flex align-center gap-2">
          {Object.entries(colors)
            .sort(([vA], [vB]) => Number(vA) - Number(vB))
            .map(([variant, value], index) => (
              <div key={index} className="d-flex d-col">
                <div
                  className={`color sg-bg-color-${colorKey}-${variant}`}
                  style={{
                    border: '1px solid var(--border-hierarchy2)',
                  }}
                />
                <Typography variant="interface-body2-bold">
                  {pascaliseCamelGroup(variant)}
                </Typography>
                <Typography variant="interface-body2-bold">{value}</Typography>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);

All.parameters = {
  options: {
    showPanel: false,
  },
};
