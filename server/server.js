const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;
const url = "mongodb+srv://averagestudent:rparas1203@cluster0.otxqv.mongodb.net/paradigm?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
    .catch((err) => console.log(err));