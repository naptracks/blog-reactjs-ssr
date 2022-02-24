import 'babel-polyfill'
import express from 'express';
import renderer from "./client/helpers/renderer";
import createStore from "./helpers/createStore";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'))

    app.get('*', (req, res) => {

        const store = createStore();
        res.send(renderer(req, store));
    })


app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
})

