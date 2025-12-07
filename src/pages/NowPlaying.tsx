import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import MusicDetail from '../components/MusicDetail/MusicDetail'

export default function NowPlaying() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MusicDetail />
        </ThemeProvider>
    )
}
