import { Container, Item, List, Name, Picture, Title } from "./profile.styles";

const Profiles = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

export default Profiles

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return (
    <List {...restProps}>
      {children}
    </List>
  )
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      {children}
    </Item>
  )
}

Profiles.Picture = function ProfilesPicture({ children, src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  )
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return (
    <Name {...restProps}>
      {children}
    </Name>
  )
}