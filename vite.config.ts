import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react() ],
	build: {
		lib: {
			entry: resolve("./src/index.tsx"),
			formats: [ "es", "cjs" ],
			fileName: ext => `${ext}/index.js`
		},
		rollupOptions: {
			external: [ "react", "react-dom" ]
		},
		target: "esnext",
		sourcemap: true
	}
});
