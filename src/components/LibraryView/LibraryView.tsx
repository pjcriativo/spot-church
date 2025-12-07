import styled from 'styled-components'
import { Plus, Search, Home as HomeIcon, Library as LibraryIcon, User } from 'lucide-react'
import { useState } from 'react'
import {
    mockLibraryPlaylists,
    mockLibraryAlbums,
    mockLibraryArtists
} from '../../data/libraryData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding-bottom: 80px;
`

const Header = styled.header`
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
`

const HeaderActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`

const Tabs = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const Tab = styled.button<{ $active: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.$active
        ? props.theme.colors.primary
        : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$active
        ? props.theme.colors.black
        : props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  white-space: nowrap;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.$active
        ? `0 0 20px ${props.theme.colors.primary}40`
        : 'none'};

  &:hover {
    background: ${props => props.$active
        ? props.theme.colors.primary
        : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-2px);
  }
`

const Content = styled.div`
  padding: 0 ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.wide}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Card = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(222, 189, 255, 0.2);
  }
`

const CardArtwork = styled.div<{ $isArtist?: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: ${props => props.$isArtist
        ? props.theme.borderRadius.full
        : props.theme.borderRadius.md};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: ${props => props.theme.shadows.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`

const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${props => props.theme.fontWeights.medium};
`

const CardSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.lightGray};
`

const EmptyStateTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.heading};
`

const EmptyStateText = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.darkGray};
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.md} 0;
  z-index: ${props => props.theme.zIndex.sticky};
`

const NavItem = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.$active
        ? props.theme.colors.primary
        : props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.$active
        ? props.theme.colors.primary
        : props.theme.colors.white};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

type TabType = 'playlists' | 'albums' | 'artists'

export default function LibraryView() {
    const [activeTab, setActiveTab] = useState<TabType>('playlists')

    const getContent = () => {
        switch (activeTab) {
            case 'playlists':
                return mockLibraryPlaylists
            case 'albums':
                return mockLibraryAlbums
            case 'artists':
                return mockLibraryArtists
            default:
                return []
        }
    }

    const content = getContent()

    return (
        <Container>
            <Header>
                <Title>Sua Biblioteca</Title>
                <HeaderActions>
                    <IconButton>
                        <Plus size={24} />
                    </IconButton>
                    <IconButton>
                        <Search size={24} />
                    </IconButton>
                </HeaderActions>
            </Header>

            <Tabs>
                <Tab
                    $active={activeTab === 'playlists'}
                    onClick={() => setActiveTab('playlists')}
                >
                    Playlists
                </Tab>
                <Tab
                    $active={activeTab === 'albums'}
                    onClick={() => setActiveTab('albums')}
                >
                    Álbuns
                </Tab>
                <Tab
                    $active={activeTab === 'artists'}
                    onClick={() => setActiveTab('artists')}
                >
                    Artistas
                </Tab>
            </Tabs>

            <Content>
                {content.length > 0 ? (
                    <Grid>
                        {content.map((item) => (
                            <Card key={item.id}>
                                <CardArtwork $isArtist={item.type === 'artist'}>
                                    <img src={item.artwork} alt={item.title} />
                                </CardArtwork>
                                <CardInfo>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardSubtitle>{item.subtitle}</CardSubtitle>
                                </CardInfo>
                            </Card>
                        ))}
                    </Grid>
                ) : (
                    <EmptyState>
                        <EmptyStateTitle>Nada aqui ainda</EmptyStateTitle>
                        <EmptyStateText>
                            Comece a adicionar {activeTab === 'playlists' ? 'playlists' : activeTab === 'albums' ? 'álbuns' : 'artistas'} à sua biblioteca
                        </EmptyStateText>
                    </EmptyState>
                )}
            </Content>

            <BottomNav>
                <NavItem>
                    <HomeIcon />
                    <span>Início</span>
                </NavItem>
                <NavItem>
                    <Search />
                    <span>Buscar</span>
                </NavItem>
                <NavItem $active>
                    <LibraryIcon />
                    <span>Biblioteca</span>
                </NavItem>
                <NavItem>
                    <User />
                    <span>Perfil</span>
                </NavItem>
            </BottomNav>
        </Container>
    )
}
