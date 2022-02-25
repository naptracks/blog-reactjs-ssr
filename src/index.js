// babel-polyfill is to allow async func on client side
import 'babel-polyfill'
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from './helpers/store';
import path from "path";



const PORT = process.env.PORT || 3000;
const app = express();

// init the build folder in static
app.use(express.static('build'))

    // get any routes
    app.get('*', (req, res) => {


        // create store from store.js inside index.js
        // pass it through renderer(<request> | <store> )
        // renderer returns html template
        const store = createStore();
        res.send(renderer(req, store));
    })


app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
})

