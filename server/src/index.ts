import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from 'hono/adapter';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://localhost:27017/hono');

config();

const app = new Hono();

app.use('/*', cors());

app.post('/register', async (c) => {
  const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);
  const { email, password } = await c.req.json<{
    email: string;
    password: string;
  }>();

  const accessToken = jwt.sign({ email }, JWT_SECRET);

  return c.json({
    accessToken,
  });
});

serve({
  fetch: app.fetch,
  port: 8787,
});
