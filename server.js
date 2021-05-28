const express = require('express');
const path = require('path');
const app = express();

const DIST_PATH = path.join(__dirname, './dist');
const PUBLIC_PATH = path.join(__dirname, './public');
const PORT = process.env.PORT || 1337;

app.use(express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));

app.get('*', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, './public/index.html'));    
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))