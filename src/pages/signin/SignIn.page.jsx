import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Form } from "../../components";
import { FooterContainer, HeaderContainer } from "../../containers";
import * as ROUTES from "../../constants/routes";
import { auth } from "../../services/firebase";

const SignIn = () => {

  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInValid = password === '' || email === '';

  const handleSignIn = async e => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav(ROUTES.BROWSE)
    } catch (e) {
      setEmail('');
      setPassword('');
      setError(e.message);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          {
            error && (
              <Form.Error>{error}</Form.Error>
            )
          }

          <Form.Base
            method="post"
            onSubmit={handleSignIn}
          >
            <Form.Input
              placeholder='Email Address'
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Form.Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit
              type="submit"
              disabled={isInValid}
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn