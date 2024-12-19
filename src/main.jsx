import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import SignUpForm from './components/signUpForm.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundPage />,
},
{
  path: '/signup',
  element: <SignUpForm />,
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
