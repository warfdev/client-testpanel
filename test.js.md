const FGPanel = require("your-module");
const panel = new FGPanel({
  client: client /* discord client */,
  passwords: [...passwords]
});

const port = process.env.PORT || 3000;
panel.start(port);