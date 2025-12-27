import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <>navbard</>
      <Outlet />
      <>footer</>
    </div>
  );
}

export default Dashboard;
