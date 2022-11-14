import { Parameters } from "@storybook/react";
import "../src/style/index.css";
import breakpoints from "../src/foundation/breakpoints/breakpoints";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  options: {
    showPanel: true,
  },
  backgrounds: {
    default: "sg-gray-100",
    values: [
      {
        name: "sg-white-100",
        value: "#FFF",
      },
      {
        name: "sg-gray-100",
        value: "#F1F3F5",
      },
      {
        name: "sg-black-100",
        value: "#000",
      },
    ],
  },
  viewport: {
    viewports: {
      sm: {
        name: "Small",
        styles: {
          width: `${breakpoints.sm}px`,
          height: `${breakpoints.sm}px`,
        },
      },
      md: {
        name: "Medium",
        styles: {
          width: `${breakpoints.md}px`,
          height: `${breakpoints.md}px`,
        },
      },
      lg: {
        name: "Large",
        styles: {
          width: `${breakpoints.lg}px`,
          height: `${breakpoints.lg}px`,
        },
      },
      "iPhone SE": {
        name: "iPhone SE",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
    },
  },
};
