import express from express;
import mongoose from mongoose;
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define and create models

// Routes 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// seed route
app.get(`/`, async(req, res)=>{

}try


