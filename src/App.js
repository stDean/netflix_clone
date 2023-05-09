import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./pages";

import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks/useAuthListerner";

function App() {

  const { user } = useAuthListener();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
