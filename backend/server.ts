import express from 'express';
import { PORT } from './src/utils/config.ts';
import { connection } from './src/utils/connection-db.ts';

const server = express();
server.use(express.json());
server.disable('x-powered-by');

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1><p>Server is running</p>');
});

server.get('/user', async (req, res) => {
  try {
    const query = 'SELECT * FROM usuario';
    const result = await connection.query(query);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: 'Someting went wrong'
    })
    console.error(err)
  }
})

server.listen(PORT, () => {
  console.info(`Server listening on port http://localhost:${PORT}`);
});