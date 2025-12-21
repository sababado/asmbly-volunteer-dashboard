import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DashboardPage } from "./pages/DashboardPage"
import { AllTasksPage } from "./pages/AllTasksPage"

import { LeaderboardPage } from "./pages/LeaderboardPage"
import { ProfilePage } from "./pages/ProfilePage"
import { MyVolunteerTimePage } from "./pages/MyVolunteerTimePage"

function App() {
  return (
    <BrowserRouter>
      {React.createElement(Routes as React.ElementType, null,
        React.createElement(Route as React.ElementType, { path: "/", element: <LandingPage /> }),
        React.createElement(Route as React.ElementType, { path: "/dashboard", element: <DashboardPage /> }),
        React.createElement(Route as React.ElementType, { path: "/tasks", element: <AllTasksPage /> }),
        React.createElement(Route as React.ElementType, { path: "/leaderboard", element: <LeaderboardPage /> }),
        React.createElement(Route as React.ElementType, { path: "/profile", element: <ProfilePage /> }),
        React.createElement(Route as React.ElementType, { path: "/volunteer-time", element: <MyVolunteerTimePage /> })
      )}
    </BrowserRouter>
  )
}

export default App
