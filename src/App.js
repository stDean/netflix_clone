import { Routes, Route, Navigate } from "react-router-dom";
import { BrowsePage, HomePage, SignInPage, SignUpPage } from "./pages";

import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks/useAuthListerner";

function App() {

  const { user } = useAuthListener();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={
        !user ? <HomePage /> : <Navigate to={ROUTES.BROWSE} />
      } />
      <Route path={ROUTES.SIGN_IN} element={
        !user ? <SignInPage /> : <Navigate to={ROUTES.BROWSE} />
      } />
      <Route path={ROUTES.SIGN_UP} element={
        !user ? <SignUpPage /> : <Navigate to={ROUTES.BROWSE} />
      } />
      <Route path={ROUTES.BROWSE} element={
        user ? <BrowsePage /> : <Navigate to={ROUTES.SIGN_IN} />
      } />
    </Routes>
  );
}

export default App;
