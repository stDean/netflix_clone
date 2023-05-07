import { Container, Break, Column, Row, Link, Text, Title } from "./footer.styles"

const Footer = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

export default Footer

Footer.Row = function FooterRow({ children, ...restProps }) {
  return (
    <Row {...restProps}>
      {children}
    </Row>
  )
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return (
    <Column {...restProps}>
      {children}
    </Column>
  )
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  )
}

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return (
    <Break {...restProps}>
      {children}
    </Break>
  )
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      {children}
    </Link>
  )
}