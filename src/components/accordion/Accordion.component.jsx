import { useContext, createContext, useState } from "react";

import { Container, Inner, Frame, Title, Item, Header, Body } from "./accordion.styles";


// created a context to toggle the accordion on and off 
const ToggleContext = createContext(null)

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

export default Accordion

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return (
    <Frame {...restProps}>
      {children}
    </Frame>
  )
}

/* Using the context here because this is only where i need the state and i don;t want to pass the state from parent to child 
*/
Accordion.Item = function AccordionItem({ children, ...restProps }) {

  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>
        {children}
      </Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {

  // getting the state from the context.
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      {...restProps}
      onClick={() => setToggleShow(toggleShow => !toggleShow)}
    >
      {children}

      {/* This shows the state */}
      {/* <pre>
        {JSON.stringify(toggleShow, null, 2)}
      </pre> */}

      {
        toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )
      }
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {

  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body
      {...restProps}
      className={toggleShow ? 'open' : 'closed'}
    >
      {children}
    </Body>
  )
}