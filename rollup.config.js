import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

import pkg from "./package.json";

const extensions = [".mjs", ".js", ".json", ".jsx"];

export default {
  input: "./src/index.jsx",
  output: [
    {
      file: "./dist/index.js",
      format: "esm",
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies)
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    sizeSnapshot()
  ]
};
