import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import AddNews from "./pages/AddNews";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:newsId" element={<DetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-news" element={<AddNews />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
