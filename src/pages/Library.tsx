import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import LibraryView from '../components/LibraryView/LibraryView'

export default function Library() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LibraryView />
        </ThemeProvider>
    )
}
