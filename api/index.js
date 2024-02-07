import express from 'express'; // Add "type": "module", in package.json to allow one to use import instead of require

const app = express()

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})
