const express = require('express');

const router = express.Router();

const app = express();

const port = process.env.PORT || 3000;

const route = require("./routes/api")


// app.get('/', (req, res) => {
//     res.send('ProductC API');
// }
// );

const myMiddleware = (req, res, next) => {
    // Your middleware logic here
    console.log('Middleware executed');
    next(); // Call next to pass control to the next middleware or route handler
  };

router.use(myMiddleware);

app.use("/api", router);

app.listen(port, () => {
    console.log('ProductC API listening on port 3000');
}
);

