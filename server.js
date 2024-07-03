const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load the merged data from CSV
let mergedData = [];

fs.createReadStream('C:\Users\PC\Downloads\Merged_Database.csv')
  .pipe(csv())
  .on('data', (row) => {
    mergedData.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/search', (req, res) => {
  const { bookId, institutionId } = req.query;

  const result = mergedData.find(data => data['PRS ID'] === bookId && data['INSCD'] === institutionId);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'No matching data found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
