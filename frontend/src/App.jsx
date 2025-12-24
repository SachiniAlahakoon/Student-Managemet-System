// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import SideBar from "./components/SideBar.jsx";
import Bottom from "./components/Bottom.jsx";
import StudentInfo from "./pages/StudentInfo.jsx"; 

import "./App.css";

// Temporary placeholder for Notices to prevent the "Notices is not defined" error
const Notices = () => <div style={{padding: "20px"}}><h1>Notices Page</h1><p>Notice content goes here...</p></div>;

function App() {
  return (
    <div className="app"> 
      <TopBar />
      <div className="app-body"> 
        <SideBar />
        <main className="content"> 
          <Routes>
            
            <Route path="/" element={<Navigate to="/student-info" />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/notices" element={<Notices />} />
          </Routes>
          <Bottom />
        </main>
      </div>
    </div>
  );
}

export default App;