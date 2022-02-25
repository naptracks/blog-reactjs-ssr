import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../client/Routes";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";


export default (req, store) => {

    // content goes to div#root inside the html template
    // which is sent to the server (index.js)
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );


    // html template with div#root
    return `
    <!Doctype html>
    <html lang="fr">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="favicon.ico" />
            <link rel="stylesheet" type="text/css" href="assets/index.css">
            <link rel="stylesheet" type="text/css" href="assets/dashboard.css">
            <link rel="stylesheet" type="text/css" href="assets/styles.css">
            <link rel="stylesheet" type="text/css" href="assets/stylesTablet.css">
            <link rel="stylesheet" type="text/css" href="assets/stylesDesktop.css">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Dehef Blog</title>
        </head>
        <body>

            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
`
}