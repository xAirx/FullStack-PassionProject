import cors from 'cors';
import express, { Express } from 'express';
import mongoose from 'mongoose';

import todoRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

//According to your docker-compose.yaml file you can access you mongo container on 127.0.0.1:27017
//only from host machine.
//In order to access it from NodeJS backend container you should use db:27017.
const uri = `process.env.MONGODB_URI`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
	.connect(uri, options)
	/* eslint-disable-next-line  */
	.then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
	.catch(error => {
		throw error;
	});
