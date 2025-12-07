import styled from 'styled-components'
import { Heart, Share2, ListPlus, User, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react'
import { useState } from 'react'
import { mockCurrentTrack } from '../../data/mockData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.gradient.dark};
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
  }
`

const Card = styled.div`
  background: ${props => props.theme.colors.darkGray};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  max-width: 500px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
  }
`

const AlbumArtwork = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.glow};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
  }
`

const NowPlaying = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
`

const TrackInfo = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`

const TrackTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`

const TrackArtist = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.lightGray};
`

const ProgressBar = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`

const ProgressTrack = styled.div`
  height: 4px;
  background: ${props => props.theme.colors.mediumGray};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background: ${props => props.theme.colors.gradient.purple};
  transition: width ${props => props.theme.transitions.fast};
`

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.lightGray};
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const ControlButton = styled.button<{ $primary?: boolean }>`
  width: ${props => props.$primary ? '64px' : '48px'};
  height: ${props => props.$primary ? '64px' : '48px'};
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.$primary
        ? props.theme.colors.gradient.purple
        : props.theme.colors.mediumGray};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.$primary ? props.theme.shadows.glow : 'none'};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.$primary
        ? props.theme.shadows.glow
        : props.theme.shadows.sm};
  }

  &:active {
    transform: scale(0.95);
  }
`

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
`

const ActionButton = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.$active
        ? props.theme.colors.primary
        : props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.xs};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export default function MusicDetail() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [progress, setProgress] = useState(45)

    return (
        <Container>
            <Card>
                <NowPlaying>Now Playing</NowPlaying>

                <AlbumArtwork>
                    <img src={mockCurrentTrack.artwork} alt={mockCurrentTrack.album} />
                </AlbumArtwork>

                <TrackInfo>
                    <TrackTitle>{mockCurrentTrack.title}</TrackTitle>
                    <TrackArtist>{mockCurrentTrack.artist}</TrackArtist>
                </TrackInfo>

                <ProgressBar>
                    <ProgressTrack>
                        <ProgressFill progress={progress} />
                    </ProgressTrack>
                    <TimeDisplay>
                        <span>0:23</span>
                        <span>{mockCurrentTrack.duration}</span>
                    </TimeDisplay>
                </ProgressBar>

                <Controls>
                    <ControlButton>
                        <Shuffle size={20} />
                    </ControlButton>
                    <ControlButton>
                        <SkipBack size={24} />
                    </ControlButton>
                    <ControlButton $primary onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                    </ControlButton>
                    <ControlButton>
                        <SkipForward size={24} />
                    </ControlButton>
                    <ControlButton>
                        <Repeat size={20} />
                    </ControlButton>
                </Controls>

                <Actions>
                    <ActionButton $active={isLiked} onClick={() => setIsLiked(!isLiked)}>
                        <Heart fill={isLiked ? 'currentColor' : 'none'} />
                        <span>Like</span>
                    </ActionButton>
                    <ActionButton>
                        <Share2 />
                        <span>Share</span>
                    </ActionButton>
                    <ActionButton>
                        <ListPlus />
                        <span>Add to Queue</span>
                    </ActionButton>
                    <ActionButton>
                        <User />
                        <span>Artist</span>
                    </ActionButton>
                </Actions>
            </Card>
        </Container>
    )
}
