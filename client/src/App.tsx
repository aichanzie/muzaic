import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library/Library";
import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import AccountSettings from "./pages/Account/Settings";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/settings" element={<AccountSettings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
