import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import AuthController from '../src/routes/auth'

const app: Application = express();

// settings
app.set('port', 8080 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', AuthController);

dotenv.config();
  
function init() {
    app.listen(app.get('port'));
    console.log('Server on port', 8080);
};

init();

export default app;