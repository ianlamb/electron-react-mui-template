# Electron/React/Material UI Template

Thanks to [Christian Sepulveda](https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/#:~:text=a%20great%20tool.-,Electron%20and,is%20Facebook's%20JavaScript%20view%20framework.&text=And%20Electron%20is%20GitHub's%20framework,platform%20desktop%20apps%20in%20JavaScript.&text=Most%20use%20webpack%20for%20the%20configuration%20necessary%20for%20React%20development.) for the basic Electron/CRA recipe.

## What this comes with

-   Electron
-   React (create-react-app)
    -   basic app setup
    -   uses new v18 createRoot API
    -   withErrorBoundary HOC
-   Material UI v5 + Emotion
    -   load Roboto font
    -   CssBaseline
    -   ThemeProvider + empty theme
-   Ramda
-   Windows Support (cross-env)
-   .prettierrc

## Accessing Electron from React

```
const electron = window.require('electron')
const fs = electron.remote.require('fs')
const ipcRenderer  = electron.ipcRenderer
```
