import React from "react";
import {renderToString} from "react-dom/server";
import App from "../components/App";

export default (req, res) => {
    const content = renderToString(<App/>);

    return `
            <!Doctype html>
    <html lang="fr">
        <head>
            <title>Dehef Blog</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
}