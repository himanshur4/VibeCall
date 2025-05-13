import { Navigate, Route, Routes } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import LogInPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import CallPage from './pages/CallPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import { Toaster } from "react-hot-toast"

import PageLoader from './components/PageLoader.jsx'

import useAuthUser from '../hooks/useAuthUser.js'

const App = () => {
  //tanstack query

 const {isLoading,authUser}=useAuthUser();
 const isAuthenticated=Boolean(authUser);
 const isOnboarded=authUser?.isOnboarded

  if (isLoading) {
    return <PageLoader />;
  }
  return (<div className="h-screen" data-theme="night">
    <Routes>
      <Route path="/" element={isAuthenticated&&isOnboarded ? <HomePage /> : (<Navigate to={!isAuthenticated?"/login":"/onboarding"} />)} />
      <Route path="/login" element={!isAuthenticated ? <LogInPage /> : <Navigate to="/" />} />
      <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />} />
      <Route path="/onboarding" element={isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />} />
      <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
      <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />} />
      <Route path="/notifications" element={isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />} />
    </Routes>
    <Toaster />
  </div>

  )
}

export default App
