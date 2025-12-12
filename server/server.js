import model from './model.js';
import bodyParser from 'body-parser';
import OAuthServer from 'express-oauth-server';
import express from "express";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize OAuth server
app.oauth = new OAuthServer({
    model,
    accessTokenLifetime: 60 * 60, // 1 hour
    refreshTokenLifetime: 60 * 60 * 24 * 30 // 30 days
});

// Initialize OAuth server
app.oauth = new OAuthServer({
  model,
  accessTokenLifetime: 60 * 60, // 1 hour
  refreshTokenLifetime: 60 * 60 * 24 * 30 // 30 days
});

// Token endpoint (password & refresh_token grants)
app.post('/oauth/token', app.oauth.token());

// Protected resource
app.get('/secure', app.oauth.authenticate(), (req, res) => {
    res.json({ message: 'Secure data', user: req.user });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});