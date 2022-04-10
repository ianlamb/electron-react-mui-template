import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './lib/theme'
import AppContent from './components/AppContent'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContent />
        </ThemeProvider>
    )
}

export default App
