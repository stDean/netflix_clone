import { useContext, createContext, useState } from "react";

import {
  Container, Group, Title, SubTitle, Text, Entities, Meta, Image, Item,
  Content, Feature, FeatureClose, FeatureText, FeatureTitle, Maturity
} from "./card.styles";

export const FeatureContext = createContext(null);

const Card = ({ children, ...restProps }) => {

  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>
        {children}
      </Container>
    </FeatureContext.Provider>
  )
}

export default Card

Card.Group = function CardGroup({ children, ...restProps }) {
  return (
    <Group {...restProps}>
      {children}
    </Group>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  );
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return (
    <SubTitle {...restProps}>
      {children}
    </SubTitle>
  );
};

Card.Text = function CardText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  );
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return (
    <Entities {...restProps}>
      {children}
    </Entities>
  );
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return (
    <Meta {...restProps}>
      {children}
    </Meta>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return (
    <Image {...restProps} />
  );
};

Card.Item = function CardItem({ item, children, ...restProps }) {

  const { setShowFeature, setItemFeature, showFeature } = useContext(FeatureContext);
  console.log(showFeature);

  return (
    <Item
      onClick={() => {
        // add the clicked item
        setItemFeature(item);
        // toggle the boolean
        setShowFeature(showFeature => !showFeature);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};
