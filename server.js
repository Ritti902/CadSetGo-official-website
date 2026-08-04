const { createApp } = require("./server/app.cjs");
const port = Number(process.env.PORT || 4173);
const app = createApp({ serveStaticFiles: true });

app.listen(port, () => {
  console.log(`CadSetGo app running on http://localhost:${port}`);
});
