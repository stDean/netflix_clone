import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
