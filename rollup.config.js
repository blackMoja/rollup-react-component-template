import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
// import postcss from "rollup-plugin-postcss";
// import css from "rollup-plugin-css-only";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import packageJson from "./package.json";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];

export default defineConfig([
  {
    external: [/node_modules/, "react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        dir: "./dist",
        format: "cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
        
      },
      {
        file: packageJson.module,
        format: "es",
      },
      {
        name: packageJson.name,
        file: packageJson.browser,
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          styleInject: "styleInject",
        },
      },
    ],
    plugins: [
      nodeResolve({ extensions }),
      babel({
        exclude: "node_modules/**",
        extensions,
        include: ["src/**/*"],
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-react",
        ],
      }),
      commonjs({
        include: "node_modules/**",
      }),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [{ src: "./src/style/index.css", dest: "./dist" }],
      }),
      alias({
        entries: [
          { find: "@", replacement: "./src/*" },
          { find: "@@", replacement: "./*" },
        ],
      }),
    ],
  },
]);
