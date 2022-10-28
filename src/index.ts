import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { App } from './app';


dotenv.config();

const port = process.env.PORT;
const dbUrl: string = process.env.DATABASE_URL ? process.env.DATABASE_URL : '';


mongoose.connect(dbUrl);
var dbConnection = mongoose.connection; 

dbConnection.on( 'error' , console.error.bind(console, 'connection error:' )); 
dbConnection.once( 'open' , function () { 
  console.log("we're connected! ");
	startServer();
});


function startServer() {
  const app = new App();
  app.createApp().listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}