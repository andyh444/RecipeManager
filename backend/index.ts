import router from './router'

const express = require('express')
const cors = require('cors')
const app = express();
const port = 3001; // Set the port for your server

app.use(cors());
app.use(express.json());
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
