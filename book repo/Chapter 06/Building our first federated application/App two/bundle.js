// Configuration:

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "app_two_remote",
      filename: "remoteEntry.js",
      exposes: {
        Dialog: "./src/Dialog"
      },
      remotes: {
        app_one: "app_one_remote",
      },
      shared: ["react", "react-dom","react-router-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    })
  ]
};



// Consumption:

import React from "react";
import Routes from './Routes'
const AppContainer = React.lazy(() => import("app_one_remote/AppContainer"));

const App = () => {
    return (
        <div>
            <React.Suspense fallback="Loading App Container from Host">
                <AppContainer routes={Routes}/>
            </React.Suspense>
        </div>
    );
}

export default App; 



// Here's what the default page, that uses Dialog, looks like:

import React from 'react'
import {ThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
import Dialog from "./Dialog";


function MainPage() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>Material UI App</h1>
                <Dialog />
            </div>
        </ThemeProvider>
    );
}

export default MainPage


