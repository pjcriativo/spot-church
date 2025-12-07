import styled from 'styled-components'
import { Heart, Play } from 'lucide-react'
import { mockUser, mockPlaylists } from '../../data/mockData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.md};
  }
`

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['2xl']};
`

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${props => props.theme.borderRadius.full};
  margin: 0 auto ${props => props.theme.spacing.lg};
  padding: 4px;
  background: ${props => props.theme.colors.gradient.purple};
  box-shadow: ${props => props.theme.shadows.glow};

  img {
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.borderRadius.full};
    object-fit: cover;
  }
`

const UserName = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.white};
`

const UserBio = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.lg};
`

const StatItem = styled.div`
  text-align: center;
`

const StatValue = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  background: ${props => props.theme.colors.gradient.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  margin-top: ${props => props.theme.spacing.xs};
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
`

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const PlaylistCard = styled.div`
  background: ${props => props.theme.colors.darkGray};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`

const PlaylistArtwork = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${props => props.theme.transitions.normal};
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const PlayButton = styled.button`
  position: absolute;
  bottom: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.gradient.purple};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(10px);
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};

  ${PlaylistCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

const PlaylistInfo = styled.div`
  padding: ${props => props.theme.spacing.lg};
`

const PlaylistTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
`

const PlaylistMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
`

const LikeButton = styled.button<{ $liked: boolean }>`
  color: ${props => props.$liked ? props.theme.colors.primary : props.theme.colors.lightGray};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: scale(1.2);
  }

  svg {
    fill: ${props => props.$liked ? 'currentColor' : 'none'};
  }
`

export default function UserProfile() {
    return (
        <Container>
            <ProfileHeader>
                <Avatar>
                    <img src={mockUser.avatar} alt={mockUser.name} />
                </Avatar>
                <UserName>{mockUser.name}</UserName>
                <UserBio>{mockUser.bio}</UserBio>
                <Stats>
                    <StatItem>
                        <StatValue>{mockUser.stats.playlists}</StatValue>
                        <StatLabel>Playlists</StatLabel>
                    </StatItem>
                    <StatItem>
                        <StatValue>{mockUser.stats.followers.toLocaleString()}</StatValue>
                        <StatLabel>Followers</StatLabel>
                    </StatItem>
                    <StatItem>
                        <StatValue>{mockUser.stats.following}</StatValue>
                        <StatLabel>Following</StatLabel>
                    </StatItem>
                </Stats>
            </ProfileHeader>

            <SectionTitle>My Playlists</SectionTitle>
            <PlaylistGrid>
                {mockPlaylists.map((playlist) => (
                    <PlaylistCard key={playlist.id}>
                        <PlaylistArtwork>
                            <img src={playlist.artwork} alt={playlist.title} />
                            <PlayButton>
                                <Play size={24} fill="currentColor" />
                            </PlayButton>
                        </PlaylistArtwork>
                        <PlaylistInfo>
                            <PlaylistTitle>{playlist.title}</PlaylistTitle>
                            <PlaylistMeta>
                                <span>{playlist.songCount} Songs • {playlist.duration}</span>
                                <LikeButton $liked={playlist.isLiked}>
                                    <Heart size={20} />
                                </LikeButton>
                            </PlaylistMeta>
                        </PlaylistInfo>
                    </PlaylistCard>
                ))}
            </PlaylistGrid>
        </Container>
    )
}
