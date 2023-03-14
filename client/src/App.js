import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Chat, About, Login, SignUp, ErrorPage, Layout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
