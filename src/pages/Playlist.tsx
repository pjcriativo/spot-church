import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import TrackView from '../components/TrackView/TrackView'

export default function Playlist() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <TrackView />
        </ThemeProvider>
    )
}
