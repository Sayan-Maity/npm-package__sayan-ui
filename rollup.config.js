// import { defineConfig } from "rollup";
// import typescript from "@rollup/plugin-typescript";

// export default defineConfig({
//   input: "src/index.ts",
//   output: {
//     dir: "dist",
//     format: "es",
//     name: "sayan-ui",
//   },
//   external: ["react", "react-dom"],
//   plugins: [typescript({ tsconfig: "tsconfig.json" })],
// });

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
