import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];

export default defineConfig({
  external: [/node_modules/],
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
      },
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({
      exclude: "node_modules/**",
      extensions,
      include: ["src/**/*"],
    }),
    commonjs({ include: "node_modules/**" }),
    peerDepsExternal(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
});
