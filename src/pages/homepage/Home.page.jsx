import { useNavigate } from 'react-router-dom';

import { Feature, OptForm } from '../../components';
import { FAQContainer, FooterContainer, HeaderContainer, JumbotronContainer } from '../../containers';
import * as ROUTES from "../../constants/routes";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button onClick={() => navigate(ROUTES.SIGN_UP)}>Try it now</OptForm.Button>

            <OptForm.Break />

            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  )
}

export default Home