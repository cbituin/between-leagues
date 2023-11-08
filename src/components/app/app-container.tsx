import { Route, Routes } from "react-router-dom";
import AppLayout from "./app-layout";
import HomePage from "../home-page/home-page";

const AppContainer = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
