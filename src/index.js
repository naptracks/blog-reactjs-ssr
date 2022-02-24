import 'babel-polyfill'
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from './helpers/store';
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'))

    app.get('*', (req, res) => {

        const store = createStore();
        res.send(renderer(req, store));
    })


app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
})

