/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Routes, Route, useNavigate } from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import CreateQuiz from "./pages/quizs/createQuiz/CreateQuiz";
import { useEffect } from "react";
import Dashaboard from "./pages/dashboard/Dashboard";
import DashbaordContent from "./components/dashboardComponents/DashboardContent";
import DeleteQuiz from "./pages/quizs/deleteQuiz/DeleteQuiz";
import Register from "./pages/signup/Register";
import QuizInterface from "./pages/quizs/quizInterface/QuizInterface";
import CongratualationInterface from "./pages/quizs/score/congoInterface";
import { useCookies } from "react-cookie";
import ThankYou from "./pages/quizs/score/ThankYou";
import QuestionAnalysis from "./pages/questionAnalysis/QuestionAnalysis";
//monday1, wed3 and friday5 - use protected route
// This component ensures that only authenticated users can access certain routes.
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  
  // Effect hook to perform actions when the component mounts or when the 'cookie' or 'navigate' values change
  useEffect(() => {
    if (!cookie["token"] || cookie["token"] === "undefined") {
      navigate("/");
    }
  }, [cookie, navigate]);

    // If the 'token' cookie exists and is not 'undefined', render the protected content (children)
  return (cookie["token"] || cookie["token"] !== "undefined") ? children : null;
};


function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashaboard />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <DashbaordContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="quiz/:id/analytics"
            element={
              <ProtectedRoute>
                <QuestionAnalysis />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-quiz"
            element={
              <ProtectedRoute>
                <CreateQuiz />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/quiz/:id/delete"
          element={
            <ProtectedRoute>
              <DeleteQuiz />
            </ProtectedRoute>
          }
        />
        <Route path="/quiz/:id" element={<QuizInterface />} />
        <Route path="/score" element={<CongratualationInterface />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
