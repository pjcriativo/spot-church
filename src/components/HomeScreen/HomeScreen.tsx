import styled from 'styled-components'
import { Home as HomeIcon, Search, Library, Bell, Clock, Settings } from 'lucide-react'
import {
    mockRecentlyPlayed,
    mockYearReview,
    mockTopSongs,
    mockTopArtists,
    mockEditorsPicks
} from '../../data/homeData'

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding-bottom: 80px; /* Space for bottom nav */
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.black};
  z-index: ${props => props.theme.zIndex.sticky};
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
`

const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
`

const HeaderIcons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.lightGray};

  svg {
    cursor: pointer;
    transition: color ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.white};
    }
  }
`

const Content = styled.div`
  padding: ${props => props.theme.spacing.lg};
`

const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing['2xl']};
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
`

const SeeAll = styled.button`
  color: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

const RecentlyPlayedGrid = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${props => props.theme.spacing.sm};
  
  &::-webkit-scrollbar {
    height: 4px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: ${props => props.theme.spacing.md};
  }
`

const RecentlyPlayedItem = styled.div`
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
  transition: transform ${props => props.theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`

const RecentlyPlayedArtwork = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }
`

const RecentlyPlayedTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.white};
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100px;
  }
`

const YearReviewCard = styled.div`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.glowGreen};
  }
`

const YearReviewArtwork = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.gradient.green};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.md};
  }
`

const YearReviewTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
`

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ReviewCard = styled.div<{ $color: string }>`
  background: ${props => props.theme.colors.darkGray};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$color};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 20px ${props => props.$color}40;
  }
`

const ReviewCardContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
`

const ReviewCardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-family: ${props => props.theme.fonts.heading};
`

const ReviewCardSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
`

const EditorsPicksGrid = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${props => props.theme.spacing.sm};

  &::-webkit-scrollbar {
    height: 4px;
  }
`

const EditorsPickCard = styled.div<{ $color: string }>`
  flex-shrink: 0;
  width: 280px;
  background: ${props => props.theme.colors.darkGray};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.$color};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 30px ${props => props.$color}40;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 240px;
  }
`

const EditorsPickArtwork = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${props => props.theme.transitions.normal};
  }

  ${EditorsPickCard}:hover & img {
    transform: scale(1.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 240px;
  }
`

const EditorsPickInfo = styled.div`
  padding: ${props => props.theme.spacing.lg};
`

const EditorsPickTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-family: ${props => props.theme.fonts.heading};
`

const EditorsPickSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  line-height: 1.4;
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

export default function HomeScreen() {
    return (
        <Container>
            <Header>
                <HeaderTitle>Recently played</HeaderTitle>
                <HeaderIcons>
                    <Bell size={24} />
                    <Clock size={24} />
                    <Settings size={24} />
                </HeaderIcons>
            </Header>

            <Content>
                {/* Recently Played Section */}
                <Section>
                    <RecentlyPlayedGrid>
                        {mockRecentlyPlayed.map((item) => (
                            <RecentlyPlayedItem key={item.id}>
                                <RecentlyPlayedArtwork>
                                    <img src={item.artwork} alt={item.title} />
                                </RecentlyPlayedArtwork>
                                <RecentlyPlayedTitle>{item.title}</RecentlyPlayedTitle>
                            </RecentlyPlayedItem>
                        ))}
                    </RecentlyPlayedGrid>
                </Section>

                {/* Year in Review Section */}
                <Section>
                    <YearReviewCard>
                        <YearReviewArtwork>
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>2021</span>
                        </YearReviewArtwork>
                        <YearReviewTitle>{mockYearReview.title}</YearReviewTitle>
                    </YearReviewCard>

                    <ReviewGrid>
                        <ReviewCard $color={mockTopSongs.color}>
                            <ReviewCardContent>
                                <ReviewCardTitle>Your Top Songs 2021</ReviewCardTitle>
                                <ReviewCardSubtitle>120 songs</ReviewCardSubtitle>
                            </ReviewCardContent>
                        </ReviewCard>
                        <ReviewCard $color={mockTopArtists.color}>
                            <ReviewCardContent>
                                <ReviewCardTitle>Your Artists Revealed</ReviewCardTitle>
                                <ReviewCardSubtitle>45 artists</ReviewCardSubtitle>
                            </ReviewCardContent>
                        </ReviewCard>
                    </ReviewGrid>
                </Section>

                {/* Editor's Picks Section */}
                <Section>
                    <SectionHeader>
                        <SectionTitle>Editor's picks</SectionTitle>
                    </SectionHeader>
                    <EditorsPicksGrid>
                        {mockEditorsPicks.map((pick) => (
                            <EditorsPickCard key={pick.id} $color={pick.color}>
                                <EditorsPickArtwork>
                                    <img src={pick.artwork} alt={pick.title} />
                                </EditorsPickArtwork>
                                <EditorsPickInfo>
                                    <EditorsPickTitle>{pick.title}</EditorsPickTitle>
                                    <EditorsPickSubtitle>{pick.subtitle}</EditorsPickSubtitle>
                                </EditorsPickInfo>
                            </EditorsPickCard>
                        ))}
                    </EditorsPicksGrid>
                </Section>
            </Content>

            {/* Bottom Navigation */}
            <BottomNav>
                <NavItem $active>
                    <HomeIcon />
                    <span>Home</span>
                </NavItem>
                <NavItem>
                    <Search />
                    <span>Search</span>
                </NavItem>
                <NavItem>
                    <Library />
                    <span>Your Library</span>
                </NavItem>
            </BottomNav>
        </Container>
    )
}
