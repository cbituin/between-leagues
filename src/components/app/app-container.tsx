import { Route, Routes } from "react-router-dom";
import AppLayout from "./app-layout";
import HomePage from "../home-page/home-page";

const AppContainer = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/lineups" element={<h1>Lineups Page</h1>} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
