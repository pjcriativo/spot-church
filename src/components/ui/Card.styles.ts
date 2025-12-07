import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.radius.lg};
  box-shadow: ${props => props.theme.shadow.soft};
  overflow: hidden;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadow.glow};
  }

  &:active {
    transform: scale(1.01);
  }
`

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${props => props.theme.colors.darkGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${props => props.theme.transitions.normal};
  }

  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`

export const CardContent = styled.div`
  padding: ${props => props.theme.spacing.md};
`

export const CardTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
