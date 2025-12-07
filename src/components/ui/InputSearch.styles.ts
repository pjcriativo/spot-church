import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

export const SearchIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.lightGray};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${props => props.theme.transitions.fast};
`

export const StyledInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  padding-left: 44px; /* Space for icon */
  background: #111111;
  border: 1px solid ${props => props.theme.colors.overlay};
  border-radius: ${props => props.theme.radius.md};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.md};
  transition: all ${props => props.theme.transitions.normal};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadow.glow};
  }

  &:focus + ${SearchIcon} {
    color: ${props => props.theme.colors.primary};
  }
`
