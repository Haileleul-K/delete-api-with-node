const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/delete', (req, res) => {
  res.status(200).json({ message: 'Successfully deleted' });
});

const port = process.env.PORT || 3001; // Changed to 3001
const server = app.listen(port, () => console.log(`Delete API running on port ${port}`));

server.on('error', (error) => {
  console.error('Server error:', error.message);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.message);
  process.exit(1);
});