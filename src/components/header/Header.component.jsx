import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background, Container, Logo, ButtonLink, Group, Link, Search, SearchInput, SearchIcon,
  Profile, Picture, Dropdown, Feature, Text, FeatureCallOut, PlayButton
} from './header.styles';


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

// For browse page
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return (
    <Group {...restProps}>
      {children}
    </Group>);
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      {children}
    </Link>);
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {

  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps} >
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>

      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='search'
        active={searchActive}
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return (
    <Profile {...restProps}>
      {children}
    </Profile>);
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={`/images/users/${src}.png`}
    />
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return (
    <Dropdown {...restProps}>
      {children}
    </Dropdown>);
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return (
    <Feature>
      {children}
    </Feature>
  );
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return (
    <FeatureCallOut {...restProps}>
      {children}
    </FeatureCallOut>);
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return (
    <PlayButton {...restProps}>
      {children}
    </PlayButton>
  );
};