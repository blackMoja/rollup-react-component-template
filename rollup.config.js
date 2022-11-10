import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      sourcemap: false,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: false,
    },
  ],
  external: [/@babel\/runtime/, "react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      extensions: ["ts", "tsx"],
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    terser(),
  ],
});
