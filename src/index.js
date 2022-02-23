import express from 'express';
import renderer from "./client/helpers/renderer";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'))

    app.get('/', (req, res) => {
        res.send(renderer(req))
    })


app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
})