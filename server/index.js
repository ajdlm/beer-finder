const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3000;

nextApp.prepare().then(() => {
  const app = express();

  app.get("/my-custom-route", (req, res) =>
    res.status(200).json({ hello: "Hello, from the updated back-end world!" })
  );

  app.get("/api/order/:id", (req, res) => {
    const { id } = req.params;

    if (id) {
      switch (id) {
        case "123-yourorder-456":
          return res.status(200).json({
            success: true,
            item: "Lord of the Rings Bluray DVD Boxset",
          });
        case "456-someother-333":
          return res.status(200).json({
            success: true,
            item:
              "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix",
          });
      }
    }
    return res.status(404).json({
      success: false,
    });
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
  });
});
