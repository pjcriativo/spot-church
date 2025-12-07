import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import UserProfile from '../components/UserProfile/UserProfile'

export default function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <UserProfile />
        </ThemeProvider>
    )
}
