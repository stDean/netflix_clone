import { Item, Inner, Container, Pane, Title, SubTitle, Image } from "./jumbotron.styles";

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
  return (
    // te div that holds each individual item
    <Item {...restProps}>
      {/* this div takes the Pane(div for text and img) */}
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

export default Jumbotron

// Main container for the jumbotron
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (
    <Pane {...restProps}>
      {children}
    </Pane>
  )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return (
    <SubTitle {...restProps}>
      {children}
    </SubTitle>
  )
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}