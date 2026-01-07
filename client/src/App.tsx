import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Body from "./Body.tsx";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout.tsx";
import Login from "./features/Login.tsx";
import Register from "./features/Register.tsx";
import Hero from "./components/Hero.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import Loader from "./features/Loader.tsx";

const Dashboard = lazy(() => import("./features/user/Dashboard.tsx"));
const AllTasks = lazy(() => import("./features/task/AllTasks.tsx"));
const CreateTask = lazy(() => import("./features/task/CreateTask.tsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Body />}>
          {/* For default ("/") endpoint - a sweet hero component */}
          <Route index element={<Hero />} />

          <Route path="auth/" element={<LoginRegisterLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* protected routes */}
        <Route element={<AppLayout />}>
          <Route path="users">
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>

          <Route path="tasks">
            <Route index element={<Navigate to="all-tasks" />} />
            <Route
              path="all-tasks"
              element={
                <Suspense fallback={<Loader />}>
                  <AllTasks />
                </Suspense>
              }
            />

            <Route
              path="create-task"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateTask />
                </Suspense>
              }
            />
          </Route>

          <Route path={"workspaces"}>
            <Route index element={<Navigate to="all-workspaces" />} />
            <Route path="all-workspaces" element={<p>All Workspaces</p>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
