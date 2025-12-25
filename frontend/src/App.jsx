import Profile from "./pages/student/Profile.jsx"
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentFrame from "./layouts/StudentFrame.jsx";

function App() {
  return (
    <Routes>
      <Route path="/student/*" element={<StudentFrame />}>
        <Route path="profile" element={<Profile />} />
        
        </Route>
    </Routes>
  );
}

export default App;
