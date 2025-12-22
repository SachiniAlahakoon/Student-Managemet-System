import TopBar from "./components/TopBar.jsx";
import SideBar from "./components/SideBar.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import Notices from "./pages/Notices.jsx";
import Bottom from "./components/Bottom.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div>
        <SideBar />
      </div>
      <main className="react-router-dom">
        <Routes>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </main>
      <div>
        <Bottom />
      </div>
    </>
  );
}

export default App;
