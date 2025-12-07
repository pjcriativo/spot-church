import styled from 'styled-components'
import {
    ChevronLeft,
    Heart,
    Plus,
    Share2,
    User,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    MoreVertical
} from 'lucide-react'
import { useState } from 'react'
import { mockCurrentPlaylist } from '../../data/trackData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding-bottom: 80px;
  position: relative;
`

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60vh;
  background: linear-gradient(180deg, rgba(222, 189, 255, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  filter: blur(60px);
  z-index: 0;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing.md};
`

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
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

const SearchBar = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`

const SortButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const PlaylistSection = styled.section`
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const AlbumArtwork = styled.div`
  width: 280px;
  height: 280px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 240px;
    height: 240px;
  }
`

const PlaylistTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.heading};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`

const PlaylistDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.spacing.md};
  max-width: 400px;
`

const PlaylistStats = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const Logo = styled.div`
  width: 24px;
  height: 24px;
  background: ${props => props.theme.colors.gradient.green};
  border-radius: ${props => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.xs};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const ActionButton = styled.button<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: ${props => props.theme.colors.white};
    transform: scale(1.1);
  }

  svg {
    fill: ${props => props.$active ? 'currentColor' : 'none'};
  }
`

const PlayButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px ${props => props.theme.colors.secondary}60;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 40px ${props => props.theme.colors.secondary}80;
  }

  &:active {
    transform: scale(0.95);
  }
`

const TrackList = styled.div`
  padding: 0 ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
`

const TrackItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md} 0;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${props => props.theme.borderRadius.md};
    padding-left: ${props => props.theme.spacing.sm};
    padding-right: ${props => props.theme.spacing.sm};
  }
`

const TrackArtwork = styled.div`
  width: 56px;
  height: 56px;
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TrackInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const TrackTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TrackArtist = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const MoreButton = styled.button`
  color: ${props => props.theme.colors.lightGray};
  padding: ${props => props.theme.spacing.sm};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

const NowPlayingBar = styled.div`
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.darkGray};
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  z-index: ${props => props.theme.zIndex.sticky};
`

const NowPlayingArtwork = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.sm};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const NowPlayingInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const NowPlayingTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const NowPlayingArtist = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const NowPlayingControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`

const MiniControlButton = styled.button`
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    transform: scale(1.1);
  }
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
  color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export default function TrackView() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    return (
        <Container>
            <BackgroundBlur />
            <Content>
                <Header>
                    <BackButton>
                        <ChevronLeft size={24} />
                    </BackButton>
                    <SearchBar>
                        Buscar na playlist
                    </SearchBar>
                    <SortButton>Ordenar</SortButton>
                </Header>

                <PlaylistSection>
                    <AlbumArtwork>
                        <img src={mockCurrentPlaylist.artwork} alt={mockCurrentPlaylist.title} />
                    </AlbumArtwork>

                    <PlaylistTitle>{mockCurrentPlaylist.title}</PlaylistTitle>
                    <PlaylistDescription>{mockCurrentPlaylist.description}</PlaylistDescription>

                    <PlaylistStats>
                        <Logo>S</Logo>
                        <span>Spotify</span>
                        <span>•</span>
                        <span>{mockCurrentPlaylist.likes.toLocaleString('pt-BR')} curtidas</span>
                        <span>•</span>
                        <span>{mockCurrentPlaylist.duration}</span>
                    </PlaylistStats>

                    <Actions>
                        <ActionButton $active={isLiked} onClick={() => setIsLiked(!isLiked)}>
                            <Heart size={20} />
                        </ActionButton>
                        <ActionButton>
                            <Plus size={20} />
                        </ActionButton>
                        <ActionButton>
                            <Share2 size={20} />
                        </ActionButton>
                        <PlayButton onClick={() => setIsPlaying(!isPlaying)}>
                            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
                        </PlayButton>
                    </Actions>
                </PlaylistSection>

                <TrackList>
                    {mockCurrentPlaylist.tracks.map((track) => (
                        <TrackItem key={track.id}>
                            <TrackArtwork>
                                <img src={track.artwork} alt={track.title} />
                            </TrackArtwork>
                            <TrackInfo>
                                <TrackTitle>{track.title}</TrackTitle>
                                <TrackArtist>{track.artist}</TrackArtist>
                            </TrackInfo>
                            <MoreButton>
                                <MoreVertical size={20} />
                            </MoreButton>
                        </TrackItem>
                    ))}
                </TrackList>
            </Content>

            <NowPlayingBar>
                <NowPlayingArtwork>
                    <img src={mockCurrentPlaylist.tracks[0].artwork} alt={mockCurrentPlaylist.tracks[0].title} />
                </NowPlayingArtwork>
                <NowPlayingInfo>
                    <NowPlayingTitle>{mockCurrentPlaylist.tracks[0].title}</NowPlayingTitle>
                    <NowPlayingArtist>{mockCurrentPlaylist.tracks[0].artist}</NowPlayingArtist>
                </NowPlayingInfo>
                <NowPlayingControls>
                    <MiniControlButton>
                        <Share2 size={20} />
                    </MiniControlButton>
                    <MiniControlButton onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                    </MiniControlButton>
                </NowPlayingControls>
            </NowPlayingBar>

            <BottomNav>
                <NavItem $active>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Início</span>
                </NavItem>
                <NavItem>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <span>Buscar</span>
                </NavItem>
                <NavItem>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <span>Sua Biblioteca</span>
                </NavItem>
            </BottomNav>
        </Container>
    )
}
