import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './theme/theme'
import { GlobalStyles } from './theme/GlobalStyles'
import { PlayerProvider } from './context/PlayerContext'
import MainLayout from './layout/MainLayout'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
    return (
        <AppThemeProvider>
            <GlobalStyles />
            <PlayerProvider>
                <BrowserRouter>
                    <MainLayout>
                        <AppRoutes />
                    </MainLayout>
                </BrowserRouter>
            </PlayerProvider>
        </AppThemeProvider>
    )
}

export default App
