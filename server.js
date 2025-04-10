const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
