import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../home-page/home-page";

const AppContainer = () => {
    return (
        <Routes>
            <Route element={<><h1>Menu Bar</h1><Outlet /></>}>
                <Route index path="/" element={<HomePage />} />
                <Route path="/profile" element={<h1>Profile Page</h1>} />
                
            </Route>
        </Routes>
    );
}

export default AppContainer;