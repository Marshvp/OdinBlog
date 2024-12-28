import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import SignUpForm from './components/pages/SignUpForm.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import LoginForm from './components/pages/LoginForm.jsx'
import TestComponent from './components/pages/testPage.jsx'
import Layout from './components/pages/Layout.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import CreateBlog from './components/pages/admin/CreateBlogPage.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/signup',
      element: <SignUpForm />,
    },
    {
      path: '/login',
      element: <LoginForm />,
    },
    {
      path: '/test',
      element: <TestComponent />,
    },
    {
      path: '/createBlog',
      element: <CreateBlog />,
    },
  ],
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
