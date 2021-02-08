import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log("🤖 Server started on port 3333!");
});

// Colocar no Settings JSON
// "[javascript]": {
//   "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true ,
//   }
// },

// "[javascriptreact]": {
//   "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true ,
//   }
// },

// "[typescript]": {
//   "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true ,
//   }
// },

// "[typescriptreact]": {
//   "editor.codeActionsOnSave": {
//       "source.fixAll.eslint": true ,
//   }
// }
