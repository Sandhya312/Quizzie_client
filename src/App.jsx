
// import { useState } from "react"
// import { useSelector } from "react-redux"
import {  Routes, Route } from 'react-router-dom';
import Analytics from "./pages/analytics/Analytics";
import CreateQuiz from "./pages/quizs/createQuiz/CreateQuiz";
// import QnaQuiz from "./components/quizComponents/qnaQuiz/qnaQuiz";
// import ShareLink from "./components/quizComponents/linkShare/ShareLink";
// import Signup from "./pages/signup/Signup";
import Dashaboard from "./pages/dashboard/Dashboard";
import DashbaordContent from './components/dashboardComponents/DashboardContent';
import DeleteQuiz from "./pages/quizs/deleteQuiz/DeleteQuiz"
// import Signup from "./pages/signup/Signup"
import Register from "./pages/signup/Register";

function App() {

  // const[isOpen,setIsOpen]= useState(false);
  //  const dispatch=useDispatch()
  // const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  // const isRegistered=useSelector(state=>state.auth.isRegistered);

  return (
    <div style={{'height':'100vh'}}>
        <Routes>
          <Route path='/' index element={ <Register/>} />
          <Route path='dashboard' element={<Dashaboard  />} >
            <Route index element={<DashbaordContent />} />
            <Route path='analytics' element = {<Analytics  />} />
            <Route path='create-quiz' element = {<CreateQuiz />} />
            <Route path='delete-quiz' element = {<DeleteQuiz />} />
            <Route path='*' element={<div>
              <h1>404</h1>
              <p>Page not found</p>
            </div>} />

          </Route>
         
        </Routes>
 






      {/* {!isLoggedIn &&  <Register/>} */}
      {/* { isLoggedIn && <Dashaboard  />} */}
     
    </div>
  )
}

export default App
