import "./app.pcss";
import App from "./App.svelte";
import "@glidejs/glide/dist/css/glide.core.min.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
