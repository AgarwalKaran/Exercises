const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require("path");
// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Replace with your MySQL username
  password: '',      // Replace with your MySQL password
  database: 'adt'    // Replace with your database name
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Set up Express to serve HTML files
app.set('view engine', 'ejs');

// Route to display the TV shows data
app.get('/tvshows', (req, res) => {
  connection.query('SELECT * FROM tv_shows', (err, results) => {
    if (err) throw err;

    // Render the 'tvshows.ejs' file with the results from the query
    res.status(200).render(path.join(__dirname, 'static/views', 'tvshows'),{shows:results});
    console.log(results);
    
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
