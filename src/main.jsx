import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import SignUpForm from './components/pages/SignUpForm.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import Layout from '../Layout.jsx'
import LoginForm from './components/pages/LoginForm.jsx'

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
      element: <SignUpForm />
    },
    {
      path: '/login',
      element: <LoginForm />
    }
  ],
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
