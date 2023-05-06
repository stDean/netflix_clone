import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background, Container, Logo, ButtonLink,
} from './header.styles';

// Feature, Profile, Text, FeatureCallOut,
//   Link, Group, Picture, Dropdown, Search, SearchInput, SearchIcon, PlayButton

const Header = ({ bg = true, children, ...restProps }) => {
  return (
    bg ? (
      <Background id="header_bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    )
  )
}

export default Header

// the frame is basically the nav container which has the logo and button_link as children
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonlink({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  )
}