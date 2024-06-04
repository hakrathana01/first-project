import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/navbar";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import AccountPage from "./pages/Account";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about-us" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/account" element={<AccountPage></AccountPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
