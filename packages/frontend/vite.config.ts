import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";

const fullReloadPlugin: PluginOption = {
  name: "full-reload-on-change",
  handleHotUpdate({ file, server }) {
    if (file.endsWith("Info.tsx")) {
      console.log("🔄 changed - triggering full page reload");
      server.ws.send({ type: "full-reload" });
    }
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), fullReloadPlugin],
});
