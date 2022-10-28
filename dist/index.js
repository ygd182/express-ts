"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
dotenv_1.default.config();
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : '';
mongoose_1.default.connect(dbUrl);
var dbConnection = mongoose_1.default.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function () {
    console.log("we're connected! ");
    startServer();
});
function startServer() {
    const app = new app_1.App();
    app.createApp().listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}
