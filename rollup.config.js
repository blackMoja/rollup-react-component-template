// * RollUp 플러그인
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        preserveModules: true,
      },
      // {
      //   file: "dist/esm/index.js",
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    external: [/@babel\/runtime/, "react", "react-dom"],
    plugins: [
      babel({
        include: ["src/**/*"],
        exclude: "node_modules/**",
        babelHelpers: "runtime",
        extensions,
      }),
      nodeResolve({ extensions }),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
];

export default config;
