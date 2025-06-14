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
import useAuthUser from './hooks/useAuthUser.js'
import Layout from './components/Layout.jsx'
import { useThemeStore } from './store/useThemeStore.js'
import FriendsPage from './pages/FriendsPage.jsx'

const App = () => {
  //tanstack query
  const { theme } = useThemeStore();
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if (!isAuthenticated&&isLoading) {
    return null;
  }
  return (<div data-theme={theme}>
    <Routes>
      <Route path="/" element={isAuthenticated && isOnboarded ? (<Layout showSidebar={true}>
        <HomePage />
      </Layout>) : (<Navigate to={!isAuthenticated ? "/signup" : "/onboarding"} />)} />
      <Route path="/login" element={!isAuthenticated ? (<LogInPage />) : (<Navigate to={isOnboarded ? "/" : "/onboarding"} />)} />
      <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to={!isOnboarded ? "/onboarding" : "/"} />} />
      <Route path="/onboarding" element={isAuthenticated ? (!isOnboarded ? (<OnboardingPage />) : (<Navigate to="/" />)) : (<Navigate to="/signup" />)} />

      <Route path="/chat/:id" element={isAuthenticated && isOnboarded ?
        <Layout showSidebar={false}>
          <ChatPage />
        </Layout>
        : <Navigate to={!isAuthenticated ? "/signup" : "/onboarding"} />} />

      <Route path="/call/:id" element={isAuthenticated && isOnboarded ? <CallPage /> : (<Navigate to={!isAuthenticated ? "/signup" : "/onboarding"} />)} />

      <Route path="/notifications" element={isAuthenticated && isOnboarded ? <Layout showSidebar={true}>
        <NotificationsPage /> </Layout> : isAuthenticated ? <Navigate to="/onboarding" /> : <Navigate to="/signup" />} />
      <Route path="/friends" element={isAuthenticated && isOnboarded ? (<Layout showSidebar={true}><FriendsPage /></Layout>) : (<Navigate to={!isAuthenticated ? "/signup" : "/onboarding"} />)} />
    </Routes>
    <Toaster />
  </div>

  )
}

export default App
